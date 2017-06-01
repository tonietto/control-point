import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { ApolloProvider } from 'react-apollo';
import { Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import { IntlProvider } from 'react-intl-redux';

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import messages from './intl';
import locale from './utils/locale';

import rootRouter from './routes';
import { rootReducer, client } from './redux/reducers';


const initialState = {
  intl: {
    locale,
    messages: messages(locale),
  },
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(client.middleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f // eslint-disable-line no-undef
  )
);

// const history = syncHistoryWithStore(browserHistory, store);

addLocaleData([...en, ...pt]);

const App = () => (
  <ApolloProvider store={store} client={client}>
    <IntlProvider>
      <Router history={browserHistory} routes={rootRouter} />
    </IntlProvider>
  </ApolloProvider>
);

export default App;
