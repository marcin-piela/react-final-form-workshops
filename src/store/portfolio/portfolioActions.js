import { RSAA } from 'redux-api-middleware';

export const FETCH_PORTFOLIO_REQUEST = 'PORTFOLIO/FETCH_PORTFOLIO_REQUEST';
export const FETCH_PORTFOLIO_SUCCESS = 'PORTFOLIO/FETCH_PORTFOLIO_SUCCESS';
export const FETCH_PORTFOLIO_FAILURE = 'PORTFOLIO/FETCH_PORTFOLIO_FAILURE';

export const fetchPortfolio = () => ({
  [RSAA]: {
    endpoint: '/portfolio',
    method: 'GET',
    types: [FETCH_PORTFOLIO_REQUEST, FETCH_PORTFOLIO_SUCCESS, FETCH_PORTFOLIO_FAILURE],
  },
});
