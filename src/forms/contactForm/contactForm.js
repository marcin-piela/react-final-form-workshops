import React, { useState } from 'react';
import { Field } from 'redux-form';
import { Grid, Button, Form, Message } from 'semantic-ui-react';

import { InputField, TextAreaField, SelectField, CheckboxField } from '../fields';
import { isRequired } from '../validation';

export const ContactForm = ({ isCompany, handleSubmit, pristine, reset, submitting }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = values => {
    setSuccess(false);
    setError(false);

    const submit = handleSubmit(values);

    if (submit instanceof Promise) {
      submit.then(response => {
        if (response && !response.error && !response.validationError) {
          setSuccess(true);
          reset();
        } else if(!response) {
          setError(true);
        }
      });
    }
  };

  return (
    <Form success={success} error={error} onSubmit={onSubmit}>
      <Message success header="Form Completed" content="Your message has been sent" />
      <Message error header="Unexpected error" content="Your message has not been sent" />

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
        name="isCompany"
        label="Company or Private"
        component={SelectField}
        placeholder="Subject"
        options={[
          {
            key: 'company',
            value: true,
            text: 'Company',
          },
          {
            key: 'private',
            value: false,
            text: 'Private',
          },
        ]}
      />

      {isCompany && (
        <Field
          name="companyName"
          validate={[isRequired]}
          label="Company name"
          component={InputField}
          type="text"
          placeholder="Company Name"
          required
        />
      )}

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

      <Field
        name="technology"
        label="Technology"
        component={SelectField}
        placeholder="Technology"
        validate={[isRequired]}
        options={[
          {
            key: 'php',
            value: 'php',
            text: 'PHP',
          },
          {
            key: 'javascript',
            value: 'javascript',
            text: 'Javascript',
          },
          {
            key: 'mobile',
            value: 'mobile',
            text: 'Mobile',
          },
        ]}
        required
      />

      <Field
        name="message"
        validate={[isRequired]}
        label="Message"
        component={TextAreaField}
        placeholder="Message"
        required
      />

      <Field name="newsletter" label="Join our newsletter" component={CheckboxField} />

      <div>
        <Button type="submit" disabled={pristine || submitting} primary loading={submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </Form>
  );
};
