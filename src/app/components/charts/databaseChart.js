import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import {Doughnut} from 'react-chartjs-2';

class DatabaseChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.item < this.props.data.length) {
        this.setState(prevState => ({item: prevState.item + 1}));
      }
    }, 20);
  }

  render() {
    const {t} = this.props;
    const databaseData = this.props.data;
    const data = {
      labels: databaseData.map(item => t(`skills:database.technos.${item.name}`)),
      datasets: [
        {
          backgroundColor: [
            'rgb(43, 175, 43)',
            'rgb(2, 119, 189)',
            'rgb(230, 42, 16)'
          ],
          data: databaseData.map((item, index) => {
            if (index > this.state.item) {
              return 0;
            }

            return item.value;
          })
        }
      ]
    };

    const options = {
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            return data.labels[tooltipItem.index];
          }
        }
      }
    };
    return (
      <div>
        <Doughnut data={data} options={options}/>
      </div>
    );
  }
}

DatabaseChart.defaultProps = {
  t: PropTypes.func,
  data: PropTypes.object
};

DatabaseChart.propTypes = {
  t: PropTypes.func,
  data: PropTypes.object
};

export default withTranslation(['common', 'skills'])(DatabaseChart);
