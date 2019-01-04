import React from 'react';
import { Form } from 'semantic-ui-react';

import { ErrorText, isError } from '../../shared';

export const SelectField = ({ input, meta, label, placeholder, id, options, required }) => (
  <Form.Field required={required}>
    <Form.Select
      {...input}
      placeholder={placeholder}
      id={id}
      options={options}
      onChange={(event, object) => input.onChange(object.value)}
      error={isError(meta)}
      label={label}
    />
    <ErrorText meta={meta} />
  </Form.Field>
);
