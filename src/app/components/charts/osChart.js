import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import Terminal from '../elements/terminal';

class OsChart extends Component {
  render() {
    return (
      <div id="back">
        <Terminal type="win" prompt="C:\Users\bastien>" text="javac HelloWorld.java"/>
        <Terminal type="mac" text="sudo npm run serve" prompt="MacBookPro:~ bastien$"/>
        <Terminal type="linux" text="python ./HelloWorld.py" prompt="bastien@pc:~$"/>
      </div>
    );
  }
}

export default withTranslation(['common', 'skills'])(OsChart);
