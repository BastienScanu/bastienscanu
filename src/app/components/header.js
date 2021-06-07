import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Logo} from './logo';
import i18n from 'i18next';
import Scroll from 'react-scroll';
const {Link} = Scroll;
import {withTranslation} from 'react-i18next';

class Header extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClickEn = this.handleClickEn.bind(this);
    this.handleClickFr = this.handleClickFr.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.dynamicClass = this.dynamicClass.bind(this);
    this.state = {openedMenu: false};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (document.body.scrollTop > (window.innerHeight / 2) - 50 || document.documentElement.scrollTop > (window.innerHeight / 2) - 50) {
      document.getElementById('header').className = `${this.dynamicClass()} greenHeader`;
    } else {
      document.getElementById('header').className = this.dynamicClass();
    }
  }

  handleClickEn() {
    i18n.changeLanguage('en');
  }

  handleClickFr() {
    i18n.changeLanguage('fr');
  }

  handleClickMenu() {
    this.setState(state => {
      return {openedMenu: !state.openedMenu};
    });
  }

  dynamicClass() {
    return `header${this.state.openedMenu ? 'Mobile' : ''}`;
  }

  render() {
    const {t} = this.props;
    return (
      <header id="header" className={this.dynamicClass()}>
        <div className="container">
          <div className="showMenu">
            <i className="material-icons" onClick={this.handleClickMenu}>menu</i>
          </div>
          <Logo big white size={32}/>
          <ul className="navBar">
            <li>
              <Link spy smooth activeClass="current-menu" to="home" duration={500}>{t('header:home')}</Link>
            </li>
            <li>
              <Link spy smooth activeClass="current-menu" to="about" duration={500} offset={-110}>{t('header:about')}</Link>
            </li>
            <li>
              <Link spy smooth activeClass="current-menu" to="skills" duration={500} offset={-90}>{t('header:skills')}</Link>
            </li>
            <li>
              <Link spy smooth activeClass="current-menu" to="experience" duration={500} offset={-90}>{t('header:experience')}</Link>
            </li>
            <li>
              <Link spy smooth activeClass="current-menu" to="contact" duration={500}>{t('header:contact')}</Link>
            </li>
          </ul>
          <ul className="langs">
            <li className={i18n.language === 'en' ? 'active' : ''} onClick={this.handleClickEn}>EN</li>
            <li className={i18n.language === 'fr' ? 'active' : ''} onClick={this.handleClickFr}>FR</li>
          </ul>
        </div>
      </header>

    );
  }
}

Header.defaultProps = {
  t: PropTypes.func
};

Header.propTypes = {
  t: PropTypes.func
};

export default withTranslation(['common', 'header'])(Header);
