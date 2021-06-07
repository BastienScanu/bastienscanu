import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';

class DesignChart extends Component {
  constructor(props) {
    super(props);
    this.images = ['sweat', 'dynergie', 'mineur', 'kata'];
    this.state = {
      image: 0,
      play: true
    };
  }

  componentWillUnmount() {
    this.setState({
      play: false
    });
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.play) {
        this.setState(prevState => ({image: (prevState.image + 1) % this.images.length}));
      }
    }, 2500);
  }

  render() {
    return (
      <div id="designCarousel" className={this.images[this.state.image]}/>
    );
  }
}

export default withTranslation(['common', 'skills'])(DesignChart);
