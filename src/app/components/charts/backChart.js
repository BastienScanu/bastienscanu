import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import {Bar} from 'react-chartjs-2';

class BackChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 0,
      play: true
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.play && this.state.item < this.props.data.length) {
        this.setState(prevState => ({item: prevState.item + 1}));
      }
    }, 200);
  }

  componentWillUnmount() {
    this.setState({
      play: false
    });
  }

  render() {
    const {t} = this.props;
    const backEndData = this.props.data;
    const data = {
      labels: backEndData.map(item => t(`skills:back.technos.${item.name}`)),
      datasets: [
        {
          label: t('skills:title'),
          backgroundColor: 'rgba(43, 175, 43, 0.7)',
          borderColor: 'rgb(43, 175, 43)',
          data: backEndData.map((item, index) => {
            if (index > this.state.item) {
              return 0;
            }

            return item.value;
          })
        }
      ]
    };

    const options = {
      scales: {
        yAxes: [{
          id: 'y-axis-0',
          ticks: {
            min: 0,
            max: 100,
            maxTicksLimit: 6,
            display: true
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: tooltipItem => {
            if (tooltipItem.yLabel > 70) {
              return t('skills:expert');
            }

            if (tooltipItem.yLabel > 50) {
              return t('skills:confirmed');
            }

            if (tooltipItem.yLabel > 30) {
              return t('skills:intermediate');
            }

            return t('skills:learning');
          }
        }
      }
    };
    return (
      <div>
        <h3>{t('skills:back.title')}</h3>
        <Bar data={data} options={options}/>
      </div>
    );
  }
}

BackChart.defaultProps = {
  t: PropTypes.func,
  data: PropTypes.object
};

BackChart.propTypes = {
  t: PropTypes.func,
  data: PropTypes.object
};

export default withTranslation(['common', 'skills'])(BackChart);
