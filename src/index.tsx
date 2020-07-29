import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import App from '@/components/App';
// import store from '@/features'
import history from '@/utils/history';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'),
);
