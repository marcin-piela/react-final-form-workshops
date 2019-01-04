import React from 'react';
import { Provider } from 'react-redux';
import { Helmet as DocumentHeader } from 'react-helmet';

import createStore from './src/store/store';

const store = createStore();

export default ({ element }) => (
  <Provider store={store}>
    <DocumentHeader>
      <title>Workshops page</title>
    </DocumentHeader>
    {element}
  </Provider>
);
