import React, {PropTypes} from 'react';
import {translate} from 'react-i18next';
import {Card} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

const JobCard = React.createClass({

  getInitialState() {
    return {
      seeDetails: false
    };
  },

  handleCLickMore() {
    this.setState(state => {
      return {seeDetails: !state.seeDetails};
    });
  },

  dynamicClass() {
    return `jobCard${this.state.seeDetails ? "Details" : ""}`;
  },

  subTitles() {
    const {t} = this.props;
    return t(`experience:${this.props.name}.type`) === "work" ?
    {
      type: t('experience:company'),
      mission: t('experience:mission')
    } :
    {
      type: t('experience:school'),
      mission: t('experience:course')
    };
  },

  render() {
    const {t} = this.props;
    return (
      <div className={this.dynamicClass()}>
        <Card containerStyle={{height: '100%'}} style={{height: '100%'}}>
          <div className="cardHeader" onClick={this.handleCLickMore}>
            <div>
              <h1>{t(`experience:${this.props.name}.company`)}</h1>
              <h2>{t(`experience:${this.props.name}.job`)}</h2>
            </div>
            <div className="cardHeaderIcon">
              <FontIcon className="material-icons">{t(`experience:${this.props.name}.type`)}</FontIcon>
            </div>
          </div>
          <div className="cardMedia">
            <img src={`images/exp/${this.props.name}.png`} alt={t(`experience:${this.props.name}.company`)}/>
            <div className="overlay">
              <p>{t(`experience:${this.props.name}.date`)}</p>
            </div>
            <div className="cardDetails">
              <h1>{this.subTitles().type}</h1>
              <p>{t(`experience:${this.props.name}.desc`)}</p>
              <h1>{this.subTitles().mission}</h1>
              <p>{t(`experience:${this.props.name}.mission`)}</p>
            </div>
          </div>
        </Card>
      </div>
    );
  },

  propTypes: {
    t: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string
  }
});

export default translate(["common", "experience"], {wait: true})(JobCard);
