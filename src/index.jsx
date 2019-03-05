import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppContainer } from 'react-hot-loader';

import Client from './client';
import reducers from './reducers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

const content = document.getElementById('content');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Client />
    </Provider>
  </AppContainer>,
  content,
);

// Hotswap in changes:
if (module.hot) {
  module.hot.accept('./client', () => {
    const UpdatedApp = require('./client').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <UpdatedApp />
        </Provider>
      </AppContainer>,
      content,
    );
  });
}
