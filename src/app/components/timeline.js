import React, {Component} from 'react';
import PropTypes from 'prop-types';
import JobCard from './elements/jobCard';
import Toggle from 'react-toggle';

class Timeline extends Component {
  constructor() {
    super();
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.disableClickLeft = this.disableClickLeft.bind(this);
    this.disableClickRight = this.disableClickRight.bind(this);
    this.classLeft = this.classLeft.bind(this);
    this.classRight = this.classRight.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleChangeJob = this.handleChangeJob.bind(this);
    this.handleGoToCard = this.handleGoToCard.bind(this);

    let slidesToShow = 1;
    if (window.matchMedia('(min-width: 62em)').matches) {
      slidesToShow = 3;
    } else if (window.matchMedia('(min-width: 48em)').matches && window.matchMedia('(max-width: 62em)').matches) {
      slidesToShow = 2;
    }

    this.state = {
      currentSlide: 0,
      slidesToShow,
      school: true,
      job: true
    };
  }

  handleClickLeft() {
    this.setState(prevState => ({currentSlide: (prevState.state.currentSlide - 1)}));
  }

  handleClickRight() {
    this.setState(prevState => ({currentSlide: (prevState.state.currentSlide + 1)}));
  }

  disableClickLeft(cards) {
    return this.state.currentSlide === 0 || cards.length === 0;
  }

  disableClickRight(cards) {
    return this.state.currentSlide >= cards.length - this.state.slidesToShow;
  }

  classLeft(cards) {
    return `bigButton green${this.disableClickLeft(cards) ? ' disabled' : ''}`;
  }

  classRight(cards) {
    return `bigButton green${this.disableClickRight(cards) ? ' disabled' : ''}`;
  }

  handleChangeSchool() {
    this.setState({currentSlide: 0});
    this.setState(prevState => ({school: !prevState.state.school}));
  }

  handleChangeJob() {
    this.setState({currentSlide: 0});
    this.setState(prevState => ({job: !prevState.state.job}));
  }

  handleGoToCard(event) {
    this.setState({currentSlide: parseInt(event.target.innerText, 10)});
  }

  render() {
    const cards = [];
    this.props.cards.forEach(card => {
      if (this.state[card.type]) {
        cards.push(card);
      }
    });
    const self = this;
    return (
      <div>
        <div className="row">
          {cards.map((card, index) => {
            if (index < self.state.currentSlide + self.state.slidesToShow && index >= self.state.currentSlide) {
              return (
                <div key={card.name} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <JobCard name={card.name}/>
                </div>
              );
            }

            return null;
          })
          }
        </div>
        <div className="timelineCircles">
          <ul>
            {cards.map((card, index) => {
              if (index === self.state.currentSlide) {
                return (
                  <li key={card.name} className="selectedDot" onClick={this.handleGoToCard}><span>{index}</span></li>
                );
              }

              if (index < cards.length - this.state.slidesToShow + 1) {
                return (
                  <li key={card.name} onClick={this.handleGoToCard}><span>{index}</span></li>
                );
              }

              return ('');
            })
            }
          </ul>
        </div>
        <div className="row timelineSettings">
          <div className="timelineSettingsPanel">
            <button type="button" className={this.classLeft(cards)} disabled={this.disableClickLeft(cards)} onClick={this.handleClickLeft}>
              <i className="material-icons">keyboard_arrow_left</i>
            </button>
            <div className="toggles">
              <Toggle
                defaultChecked={this.state.school}
                icons={{
                  checked: <i className="material-icons">school</i>,
                  unchecked: <i className="material-icons">school</i>
                }}
                onChange={this.handleChangeSchool}
              />
              <Toggle
                defaultChecked={this.state.job}
                icons={{
                  checked: <i className="material-icons">work</i>,
                  unchecked: <i className="material-icons">work</i>
                }}
                onChange={this.handleChangeJob}
              />
            </div>
            <button type="button" className={this.classRight(cards)} disabled={this.disableClickRight(cards)} onClick={this.handleClickRight}>
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Timeline.defaultProps = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

Timeline.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Timeline;
