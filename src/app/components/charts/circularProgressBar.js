import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';

class CircularProgressBar extends Component {
  render() {
    const text = () => this.props.text;
    const className = () => this.props.class;
    return (
      <CircularProgressbar
        initialAnimation
        percentage={this.props.percentage} strokeWidth={7}
        textForPercentage={text}
        classForPercentage={className}
      />
    );
  }
}

CircularProgressBar.defaultProps = {
  text: PropTypes.string,
  class: PropTypes.string,
  percentage: PropTypes.number
};

CircularProgressBar.propTypes = {
  text: PropTypes.string,
  class: PropTypes.string,
  percentage: PropTypes.number
};

export default CircularProgressBar;
