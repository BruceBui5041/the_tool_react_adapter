import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import _ from 'lodash';
import * as moment from 'moment';
import * as hooks from 'usehooks-ts';

Object.assign(window, {
  _,
  React,
  ReactDOM,
  moment,
  hooks,
});

import './logger';
import './base';

import App from './app';

ReactDOM.render(<App />, document.getElementById('app'));
