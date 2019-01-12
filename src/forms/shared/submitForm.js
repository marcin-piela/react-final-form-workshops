export const submitForm = (dispatch, action) => async (formValues, formApi) => {
  const results = await dispatch(action(formValues, formApi));

  if (results.payload.status === 400 && results.payload.response) {
    return {
      validationError: true,
      ...results.payload.response,
    };
  }

  if (results.error) {
    return Promise.reject(results);
  }

  return Promise.resolve(results);
};
