import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { AppBehaviour } from './components/App/AppBehaviour';

ReactDOM.render(
  <AppBehaviour/>,
  document.getElementById('root') as HTMLElement
)