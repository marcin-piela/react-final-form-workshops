import React from 'react';
import { Field } from 'react-final-form';

export const ConditionalField = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);
