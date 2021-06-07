import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n'; // Initialized i18next instance

import {Main} from './app/main';
import './app/style/main.scss';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Main/>
  </I18nextProvider>,
  document.getElementById('root')
);
