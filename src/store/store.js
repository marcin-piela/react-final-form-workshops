import { applyMiddleware, createStore as reduxCreateStore, compose } from 'redux';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { apiMiddleware } from 'redux-api-middleware';
import contentMiddleware from '@tshio/redux-api-content-middleware';
import createEndpointMiddleware from '@tshio/redux-api-endpoint-middleware';
import paramsMiddleware from '@tshio/redux-api-params-middleware';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

import { portfolioReducer as portfolio } from './portfolio/portfolioReducer';
import { validationMiddleware } from './middlewares/validationMiddleware';

const endpointMiddleware = createEndpointMiddleware({
  apiUrl: 'http://localhost:4000',
});

const middlewares = [endpointMiddleware, contentMiddleware, paramsMiddleware, apiMiddleware, validationMiddleware];

const createStore = () =>
  reduxCreateStore(
    combineReducers({
      form,
      portfolio,
    }),
    {},
    compose(
      applyMiddleware(...middlewares),
      devToolsEnhancer({ name: 'Primary' })
    )
  );

export default createStore;
