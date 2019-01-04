import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { Grid } from 'semantic-ui-react';

import { InputField, SelectField, CheckboxField } from '../../../fields';
import { isRequired } from '../../../validation';

export const ContactStep = () => {
  return (
    <Fragment>
      <Grid>
        <Grid.Row style={{ marginBottom: '16px' }}>
          <Grid.Column width={8}>
            <Field
              name="firstName"
              validate={[isRequired]}
              label="Firstname"
              component={InputField}
              placeholder="First Name"
              required
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Field
              name="lastName"
              validate={[isRequired]}
              label="Lastname"
              component={InputField}
              type="text"
              placeholder="Last Name"
              required
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Field
        name="email"
        validate={[isRequired]}
        label="Email"
        component={InputField}
        type="text"
        placeholder="Email"
        required
      />

      <Field
        name="subject"
        label="Subject"
        component={SelectField}
        placeholder="Subject"
        options={[
          {
            key: 'question',
            value: 'question',
            text: 'Question',
          },
          {
            key: 'complaint',
            value: 'complaint',
            text: 'Complaint',
          },
          {
            key: 'other',
            value: 'other',
            text: 'Other',
          },
        ]}
      />

      <Field name="newsletter" label="Join our newsletter" component={CheckboxField} />
    </Fragment>
  );
};
