import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import MainSkills from './mainSkills';
import Languages from './languages';
import Soft from './soft';

class Skills extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="skills">
        <p className="centeredTitle">{t('skills:title')}</p>
        <div className="container">
          <MainSkills/>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 otherSkill">
              <div className="skillCard">
                <Soft/>
              </div>
            </div>
            <div id="softPic" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            </div>
            <div id="languagesPic" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 otherSkill">
              <div className="skillCard">
                <Languages/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Skills.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(Skills);
