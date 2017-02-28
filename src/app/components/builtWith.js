import React, {Component, PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';
import {translate} from 'react-i18next';

export class BuiltWith extends Component {
  render() {
    const {t} = this.props;
    const technos = ['nodejs', 'react', 'webpack', 'css', 'sass', 'gulp', 'html', 'es6', 'babel'];
    return (
      <section id="builtWith">
        <div className="container">
          <h3>{t('builtWith:title')}</h3>
          <div id="usedTechnos">
            {technos.map(tech => {
              return (
                <div key={tech}>
                  <img src={`../../images/techs/${tech}.svg`} alt={t(`builtWith:${tech}`)} height="70px"/>
                </div>
              );
            })}
          </div>
          <div className="row">
            <button><a href="https://github.com/BastienScanu/bastienscanu" target="_blank"><FontAwesome name="github"/> {t('builtWith:github')}</a></button>
          </div>
        </div>
      </section>
    );
  }
}

BuiltWith.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "builtWith"], {wait: true})(BuiltWith);
