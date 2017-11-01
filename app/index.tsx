import * as React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/Root';
import './app.global.scss';



const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  // Key can be whatever you want
  routing: routingStore,
  // ...other stores
};  

const history = syncHistoryWithStore(browserHistory, routingStore);


render(
  <AppContainer>
    <Root store={stores} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={stores} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
