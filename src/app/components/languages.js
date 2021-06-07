import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import CircularProgressBar from './charts/circularProgressBar';

class Languages extends Component {
  render() {
    const {t} = this.props;

    return (
      <div id="languages">
        <h4>{t('skills:languages.title')}</h4>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <CircularProgressBar percentage={100} text={t('skills:languages.fr')} class="greenChart"/>
            <p>{t('skills:languages.native')}</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <CircularProgressBar percentage={80} text={t('skills:languages.en')} class="blueChart"/>
            <p>{t('skills:languages.fpp')}</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <CircularProgressBar percentage={80} text={t('skills:languages.es')} class="orangeChart"/>
            <p>{t('skills:languages.fpp')}</p>
          </div>
        </div>
      </div>
    );
  }
}

Languages.defaultProps = {
  t: PropTypes.func
};

Languages.propTypes = {
  t: PropTypes.func
};

export default withTranslation(['common', 'skills'])(Languages);
