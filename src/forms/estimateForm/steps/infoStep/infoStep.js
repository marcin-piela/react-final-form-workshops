import React, { Fragment } from 'react';
import { Field } from 'redux-form';

import {InputField, TextAreaField} from '../../../fields';
import { isRequired } from '../../../validation';

export const InfoStep = () => {
  return (
    <Fragment>

      <Field
        name="title"
        validate={[isRequired]}
        label="Type title of project"
        component={InputField}
        type="text"
        placeholder="Title"
        required
      />

      <Field
        name="description"
        validate={[isRequired]}
        label="Type description of project"
        component={TextAreaField}
        placeholder="Description"
        required
      />

    </Fragment>
  );
};
