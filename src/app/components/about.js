import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';

class About extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="aboutMe">
        <div className="container">
          <div className="row">
            <div id="profilePicCol" className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <div id="profilePic" className="row"/>
              <div className="row">
                <button className="withIcon" type="button">
                  <a href="https://bastien-scanu.com/bastien-scanu-cv.pdf" target="_blank" rel="noreferrer">
                    <i className="material-icons">cloud_download</i>{t('about:cv')}
                  </a>
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
              <div id="pitch">
                <p>{t('about:pitch')}</p>
                <p>{t('about:looking')}</p>
              </div>
            </div>
            <div id="profileLogoCol" className="col-xs-12 col-sm-3 col-md-2 col-lg-2"/>
          </div>
        </div>
      </section>
    );
  }
}

About.defaultProps = {
  t: PropTypes.func
};

About.propTypes = {
  t: PropTypes.func
};

export default withTranslation(['common', 'about'])(About);
