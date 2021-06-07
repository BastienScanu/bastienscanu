import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import {Radar} from 'react-chartjs-2';

class SkillsRadar extends Component {
  render() {
    const {t} = this.props;
    const radarData = {
      labels: [t('skills:design.title'), t('skills:front.title'), t('skills:back.title'), t('skills:database.title'), t('skills:os.title')],
      datasets: [
        {
          label: t('skills:title'),
          backgroundColor: 'rgba(179, 181, 198, 0.2)',
          borderColor: 'rgba(179, 181, 198, 1)',
          pointBackgroundColor: 'rgba(179, 181, 198, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179, 181, 198, 1)',
          data: [65, 75, 90, 75, 60]
        }
      ]
    };

    const radarOptions = {
      scale: {
        ticks: {
          display: false,
          min: 0
        }
      },
      tooltips: {
        callbacks: {
          label: tooltipItem => {
            switch (tooltipItem.yLabel) {
              case 90:
                return t('skills:expert');
              case 75:
                return t('skills:confirmed');
              default:
                return t('skills:intermediate');
            }
          }
        }
      }
    };
    return (
      <Radar data={radarData} options={radarOptions}/>
    );
  }
}

SkillsRadar.defaultProps = {
  t: PropTypes.func
};

SkillsRadar.propTypes = {
  t: PropTypes.func
};

export default withTranslation(['common', 'skills'])(SkillsRadar);
