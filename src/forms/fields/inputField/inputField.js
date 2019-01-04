import React from 'react';
import { Form } from 'semantic-ui-react';

import { isError, ErrorText } from '../../shared';

export const InputField = ({ input, meta, label, placeholder, id, required, type, inline }) => (
  <Form.Field required={required}>
    <Form.Input
      {...input}
      inline={inline}
      label={label}
      placeholder={placeholder}
      id={id}
      error={isError(meta)}
      title="test"
      type={type}
    />
    <ErrorText meta={meta} />
  </Form.Field>
);
