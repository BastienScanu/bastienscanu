import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import FontAwesome from 'react-fontawesome';
import {spring, Motion} from 'react-motion';

class ActionButton extends Component {
  constructor() {
    super();
    this.initialPosition = this.initialPosition.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.state = {isOpen: false};
  }

  initialPosition(childIndex) {
    return {
      bottom: spring(-51 - (46 * childIndex))
    };
  }

  handleMouseOver() {
    this.setState({
      isOpen: true
    });
  }

  handleMouseOut() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const {t} = this.props;
    const {isOpen} = this.state;
    const finalPosition = {
      bottom: spring(0)
    };
    return (
      <div id="actionButton" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <Motion style={isOpen ? finalPosition : this.initialPosition(2)}>
          {({bottom}) => (
            <div className="buttonLabel" style={{bottom}}>
              <label className="tooltip">{t('common:button.linkedin')}</label>
              <div className="smallButton blue">
                <a href="https://fr.linkedin.com/in/bastienscanu" target="_blank" rel="noreferrer">
                  <FontAwesome name="linkedin-square"/>
                </a>
              </div>
            </div>
          )}
        </Motion>
        <Motion style={isOpen ? finalPosition : this.initialPosition(1)}>
          {({bottom}) => (
            <div className="buttonLabel" style={{bottom}}>
              <label className="tooltip">{t('common:button.mail')}</label>
              <div className="smallButton orange">
                <a href="mailto:bastien-scanu@gmail.com" target="_blank" rel="noreferrer">
                  <i className="material-icons">mail</i>
                </a>
              </div>
            </div>
          )}
        </Motion>
        <Motion style={isOpen ? finalPosition : this.initialPosition(0)}>
          {({bottom}) => (
            <div className="buttonLabel" style={{bottom}}>
              <label className="tooltip">{t('common:button.resume')}</label>
              <div className="smallButton red">
                <a href="https://bastien-scanu.com/bastien-scanu-cv.pdf" target="_blank" rel="noreferrer">
                  <i className="material-icons">description</i>
                </a>
              </div>
            </div>
          )}
        </Motion>
        <div className="mainButton">
          <div className="bigButton green">
            <i className="material-icons">add</i>
          </div>
        </div>
      </div>
    );
  }
}

ActionButton.defaultProps = {
  t: PropTypes.func
};

ActionButton.propTypes = {
  t: PropTypes.func
};

export default withTranslation(['common'])(ActionButton);
