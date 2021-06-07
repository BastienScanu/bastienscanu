import React, {Component} from 'react';
import MainSkill from './elements/mainSkill';
import {withTranslation} from 'react-i18next';
import SkillsRadar from './charts/skillsRadar';
import DesignChart from './charts/designChart';
import FrontChart from './charts/frontChart';
import BackChart from './charts/backChart';
import DatabaseChart from './charts/databaseChart';
import OsChart from './charts/osChart';

class MainSkills extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.getChart = this.getChart.bind(this);
    this.state = {openedMenu: -1};
    this.data = {
      design: {
        technos: [
          {
            name: 'toshop',
            important: true
          },
          {
            name: 'sketch',
            important: true
          },
          {
            name: 'trator',
            important: false
          }
        ],
        icon: 'paint-brush',
        color: '#E62A10',
        theme: 'red'
      },
      front: {
        technos: [
          {
            name: 'html',
            important: true
          },
          {
            name: 'css',
            important: true
          },
          {
            name: 'es6',
            important: true
          },
          {
            name: 'angular',
            important: true
          },
          {
            name: 'react',
            important: false
          },
          {
            name: 'sass',
            important: false
          },
          {
            name: 'jquery',
            important: false
          }
        ],
        icon: 'desktop',
        color: '#FF9800',
        theme: 'orange'
      },
      back: {
        technos: [
          {
            name: 'algo',
            important: false,
            value: 70
          },
          {
            name: 'python',
            important: false,
            value: 30
          },
          {
            name: 'es6',
            important: true,
            value: 80
          },
          {
            name: 'node',
            important: true,
            value: 90
          },
          {
            name: 'php',
            important: false,
            value: 60
          },
          {
            name: 'java',
            important: true,
            value: 60
          },
          {
            name: 'c',
            important: false,
            value: 50
          }
        ],
        icon: 'cogs',
        color: '#2BAF2B',
        theme: 'green'
      },
      database: {
        technos: [
          {
            name: 'mongo',
            important: true,
            value: 10
          },
          {
            name: 'sql',
            important: true,
            value: 10
          },
          {
            name: 'redis',
            important: false,
            value: 10
          }
        ],
        icon: 'database',
        color: '#0277BD',
        theme: 'blue'
      },
      os: {
        technos: [
          {
            name: 'mac',
            important: true
          },
          {
            name: 'linux',
            important: true
          },
          {
            name: 'win',
            important: true
          },
          {
            name: 'shell',
            important: true
          },
          {
            name: 'docker',
            important: false
          }
        ],
        icon: 'terminal',
        color: '#AB47BC',
        theme: 'purple'
      }
    };
  }

  updateState(index) {
    this.setState(state => {
      if (state.openedMenu === index) {
        return {openedMenu: -1};
      }

      return {openedMenu: index};
    });
  }

  getChart() {
    switch (this.state.openedMenu) {
      case 0: return <DesignChart/>;
      case 1: return <FrontChart/>;
      case 2: return <BackChart data={this.data.back.technos}/>;
      case 3: return <DatabaseChart data={this.data.database.technos}/>;
      case 4: return <OsChart/>;
      default: return <SkillsRadar/>;
    }
  }

  render() {
    const skills = [
      'design', 'front', 'back', 'database', 'os'
    ];
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          {this.getChart()}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div id="mainSkills">
            {skills.map((skill, index) => {
              return (
                <MainSkill
                  key={skill}
                  name={skill}
                  data={this.data[skill]}
                  handler={this.updateState}
                  index={index}
                  isOpened={this.state.openedMenu === index}
                />
              );
            })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation(['common', 'skills'])(MainSkills);
