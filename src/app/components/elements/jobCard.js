import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import {Collapse} from 'react-collapse';

class JobCard extends Component {
  constructor() {
    super();
    this.handleCLickMore = this.handleCLickMore.bind(this);
    this.subTitles = this.subTitles.bind(this);
    this.state = {seeDetails: false};
  }

  handleCLickMore() {
    this.setState(state => {
      return {seeDetails: !state.seeDetails};
    });
  }

  subTitles() {
    const {t} = this.props;
    return t(`experience:${this.props.name}.type`) === 'work' ?
      {
        type: t('experience:company'),
        mission: t('experience:mission')
      } :
      {
        type: t('experience:school'),
        mission: t('experience:course')
      };
  }

  render() {
    const {t} = this.props;
    return (
      <div className="jobCard">
        <div className="cardHeader" onClick={this.handleCLickMore}>
          <div>
            <h1>{t(`experience:${this.props.name}.company`)}</h1>
            <h2>{t(`experience:${this.props.name}.job`)}</h2>
          </div>
          <div className="cardHeaderIcon">
            <i className="material-icons">{t(`experience:${this.props.name}.type`)}</i>
          </div>
        </div>
        <div className="cardDetails">
          <Collapse isOpened={this.state.seeDetails}>
            <h1>{this.subTitles().type}</h1>
            <p>{t(`experience:${this.props.name}.desc`)}</p>
            <br/>
            <h1>{this.subTitles().mission}</h1>
            <p>{t(`experience:${this.props.name}.mission`)}</p>
            <hr className="jobCardDivider" style={{marginTop: 15, marginBottom: 5}}/>
            <div className="row cardLinks">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <a href={t(`experience:${this.props.name}.maps`)} target="_blank" rel="noreferrer">
                  <i className="material-icons">room</i> {t(`experience:${this.props.name}.location`)}
                </a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <a href={t(`experience:${this.props.name}.website`)} target="_blank" rel="noreferrer">
                  <i className="material-icons">language</i> {t('experience:website')}
                </a>
              </div>
            </div>
          </Collapse>
          <div className="seeMore" onClick={this.handleCLickMore}>
            <i className="material-icons">{this.state.seeDetails ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i>
          </div>
        </div>
        <div className="cardMedia">
          <img src={`images/exp/${this.props.name}.png`} alt={t(`experience:${this.props.name}.company`)}/>
          <div className="overlay">
            <p>{t(`experience:${this.props.name}.date`)}</p>
          </div>
        </div>
      </div>
    );
  }
}

JobCard.defaultProps = {
  t: PropTypes.func,
  name: PropTypes.string
};

JobCard.propTypes = {
  t: PropTypes.func,
  name: PropTypes.string
};

export default withTranslation(['common', 'experience'])(JobCard);
