import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';

class FrontChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 0,
      play: true
    };
    this.nextStyle = this.nextStyle.bind(this);
    this.intervals = [700, 700, 700, 700, 500, 100, 100, 100, 100, 700, 2000, 2000, 700, 700, 700, 700, 700, 700, 700, 700];
  }

  componentDidMount() {
    this.nextStyle();
  }

  componentWillUnmount() {
    this.setState({
      play: false
    });
  }

  nextStyle() {
    if (this.state.play) {
      this.setState(prevState => ({style: (prevState.state.style + 1) % 20}));
      setTimeout(() => {
        this.nextStyle();
      }, this.intervals[this.state.style]);
    }
  }

  render() {
    return (
      <div id="frontEnd">
        <p className={`frontEnd${this.state.style}`}>Front-End !</p>
      </div>
    );
  }
}

export default withTranslation(['common', 'skills'])(FrontChart);
