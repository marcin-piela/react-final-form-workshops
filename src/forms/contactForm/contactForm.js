import React, { useState } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { Grid, Button, Form, Message } from 'semantic-ui-react';

import { InputField, TextAreaField, SelectField, CheckboxField, ConditionalField } from '../fields';
import { isRequired } from '../validation';

const ContactForm = ({ handleSubmit, pristine, submitting, form: { reset } }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    setSuccess(false);
    setError(false);

    try {
      const results = await handleSubmit();

      if (results && !results.validationError) {
        setSuccess(true);

        try {
          reset();
        } catch (error) {};
      }
    } catch (error) {
      setError(true);
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
              validate={isRequired}
              label="Firstname"
              component={InputField}
              placeholder="First Name"
              required
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Field
              name="lastName"
              validate={isRequired}
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

      <ConditionalField when="isCompany" is={true}>
        <Field
          name="companyName"
          validate={isRequired}
          label="Company name"
          component={InputField}
          type="text"
          placeholder="Company Name"
          required
        />
      </ConditionalField>

      <Field
        name="email"
        validate={isRequired}
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
        validate={isRequired}
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
        validate={isRequired}
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

export default ({ onSubmit }) => (
  <FinalForm
    subscription={{ pristine: true, dirty: true, submitting: true }}
    onSubmit={onSubmit}
    component={ContactForm}
    initialValues={{
      isCompany: false,
      companyName: '',
    }}
  />
);
