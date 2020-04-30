import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import * as Store from './store'
import { GraphQLApiClient } from './api/GraphQLApiClient';
import { apolloClient } from './apollo'
import SimpleApp from './SimpleApp'

const store: Store.AppStore = Store.getStore(new GraphQLApiClient(apolloClient))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SimpleApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
