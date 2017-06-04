import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      play: true
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.play && this.state.index < this.props.text.length) {
        this.setState({
          index: this.state.index + 1
        });
      }
    }, 100);
  }

  componentWillUnmount() {
    this.state = {
      play: false
    };
  }
  render() {
    return (
      <div className={`terminal ${this.props.type}`}>
        <span className="text">{this.props.prompt} {this.props.text.slice(0, this.state.index)}</span>
      </div>
    );
  }
}

Terminal.propTypes = {
  type: PropTypes.string,
  prompt: PropTypes.string,
  text: PropTypes.string
};

export default Terminal;
