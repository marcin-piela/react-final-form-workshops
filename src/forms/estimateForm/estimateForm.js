import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

import { Tabs } from './tabs/tabs';
import { ContactStep } from './steps/contactStep/contactStep';
import { InfoStep } from './steps/infoStep/infoStep';
import { ItemsStepContainer } from './steps/itemsStep/itemsStepContainer';

export const EstimateForm = ({ itemsBudget, handleSubmit, pristine, reset, submitting }) => {
  const [step, setStep] = useState(1);
  const [validation, setValidation] = useState({ 1: false, 2: false, 3: false });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onChangeStep = index => {
    handleSubmit(() => {
      setValidation({ ...validation, [step]: true });
      setStep(index);
    })();
  };

  const onSubmit = values => {
    setSuccess(false);
    setError(false);

    const submit = handleSubmit(values);

    if (submit instanceof Promise) {
      submit.then(response => {
        if (response && !response.error && !response.validationError) {
          setSuccess(true);
          setStep(1);
          setValidation({ 1: false, 2: false, 3: false });
          reset();
        } else if (!response) {
          setError(true);
        }
      });
    }
  };

  return (
    <Form success={success} error={error} onSubmit={onSubmit}>
      <Message success header="Form Completed" content="Your message has been sent" />
      <Message error header="Unexpected error" content="Your message has not been sent" />
      Your budget: ${itemsBudget}
      <Tabs active={step} validation={validation} onChange={onChangeStep} style={{ marginBottom: '48px' }} />
      {step === 1 && <InfoStep />}
      {step === 2 && <ItemsStepContainer />}
      {step === 3 && <ContactStep />}
      {step === 3 && (
        <div>
          <Button
            type="submit"
            disabled={pristine || submitting || !validation[1] || !validation[2]}
            primary
            loading={submitting}
          >
            Submit
          </Button>
        </div>
      )}
    </Form>
  );
};
