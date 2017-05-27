import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { intlReducer } from 'react-intl-redux';

import userGetter from './userGetter';


const client = new ApolloClient({
  networkInterface: createNetworkInterface(
    {
      uri: 'http://gql.futurecom.com.br/graphql',
    }
  ),
});

const rootReducer = combineReducers({
  userGetter,
  routing: routerReducer,
  apollo: client.reducer(),
  intl: intlReducer,
});

export { rootReducer, client }; // eslint-disable-line import/prefer-default-export
