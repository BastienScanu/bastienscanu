import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';

class Qualities extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="qualities">
        <div id="qualitiesBg"/>
        <p className="centeredTitle">{t('qualities:title')}</p>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoDev"/>
                <h5>{t('qualities:topSkills.dev.title')}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoWeb"/>
                <h5>{t('qualities:topSkills.web.title')}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoAgile"/>
                <h5>{t('qualities:topSkills.agile.title')}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoCurious"/>
                <h5>{t('qualities:topSkills.curious.title')}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoCom"/>
                <h5>{t('qualities:topSkills.com.title')}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoDynamic"/>
                <h5>{t('qualities:topSkills.dynamic.title')}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Qualities.defaultProps = {
  t: PropTypes.func
};

Qualities.propTypes = {
  t: PropTypes.func
};

export default withTranslation(['common', 'qualities'])(Qualities);
