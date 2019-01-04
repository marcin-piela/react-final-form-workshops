import { SubmissionError } from 'redux-form';

export const validationMiddleware = () => next => action => {
  if (!action.error || !(action.payload instanceof Error)) {
    return next(action);
  }

  if (!action.payload.response) {
    return next(action);
  }

  if (action.payload.status === 400 && action.payload.response) {
    next(action);
    throw new SubmissionError({
      validationError: true,
      ...action.payload.response,
    });
  }

  next(action);
};
