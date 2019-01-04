import { handleActions } from 'redux-actions';

import * as actions from './portfolioActions';

export const portfolioReducer = handleActions(
  {
    [actions.FETCH_PORTFOLIO_REQUEST]: state => ({
      ...state,
      loading: true,
    }),
    [actions.FETCH_PORTFOLIO_FAILURE]: state => ({
      ...state,
      loading: false,
      error: true,
    }),
    [actions.FETCH_PORTFOLIO_SUCCESS]: (state, { payload }) => ({
      ...state,
      loading: false,
      count: payload.length,
      data: payload,
    }),
  },
  {
    data: [],
    loading: false,
    error: false,
    count: 0,
  }
);
