import React, {Component, Suspense} from 'react';

import Header from './components/header';
import Home from './components/home';
import MyFooter from './components/footer';
import Experience from './components/experience';
import Contact from './components/contact';
import Qualities from './components/qualities';
import Skills from './components/skills';
import BuiltWith from './components/builtWith';
import About from './components/about';
import ActionButton from './components/elements/actionButton';

export class Main extends Component {
  render() {
    return (
      <div>
        <Suspense fallback="loading">
          <Header/>
          <Home/>
          <div id="about">
            <About/>
            <Qualities/>
          </div>
          <Skills/>
          <Experience/>
          <BuiltWith/>
          <Contact/>
          <ActionButton/>
          <MyFooter/>
        </Suspense>
      </div>
    );
  }
}
