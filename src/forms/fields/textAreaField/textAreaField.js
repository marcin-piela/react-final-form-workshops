import React from 'react';
import { Form } from 'semantic-ui-react';

import { ErrorText, isError } from '../../shared';

export const TextAreaField = ({ input, meta, label, placeholder, id, required }) => (
  <Form.Field required={required}>
    <Form.TextArea {...input} placeholder={placeholder} id={id} error={isError(meta)} label={label} />
    <ErrorText meta={meta} />
  </Form.Field>
);
