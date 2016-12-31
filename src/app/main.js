import React, {Component} from 'react';
import Header from './components/header';
import Home from './components/home';
import MyFooter from './components/footer';
import Experience from './components/experience';
import Contact from './components/contact';
import Skills from './components/skills';
import About from './components/about';
import ActionButton from './components/actionButton';

export class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
        <ActionButton/>
        <MyFooter/>
      </div>
    );
  }
}
