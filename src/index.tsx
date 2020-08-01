import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from '@/components/App';
import history from '@/utils/history';

ReactDOM.render(
  <RecoilRoot>
    <Router history={history}>
      <App />
    </Router>
  </RecoilRoot>,
  document.getElementById('root'),
);
