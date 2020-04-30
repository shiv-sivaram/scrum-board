import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import * as Store from './redux/store'
import { GraphQLApiClient } from './api/GraphQLApiClient';
import { apolloClient } from './api/apollo'
import App from './components/App'

const store: Store.AppStore = Store.getStore(new GraphQLApiClient(apolloClient))

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
