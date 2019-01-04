import React from 'react';
import { Form } from 'semantic-ui-react';

import { ErrorText, isError } from '../../shared';

export const CheckboxField = ({ input, meta, label, required }) => (
  <Form.Field required={required}>
    <Form.Checkbox {...input} label={label} error={isError(meta)} />
    <ErrorText meta={meta} />
  </Form.Field>
);
