import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Field, Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import createDecorator from 'final-form-calculate';

import { Tabs } from './tabs/tabs';
import { ContactStep } from './steps/contactStep/contactStep';
import { InfoStep } from './steps/infoStep/infoStep';
import { ItemsStep } from './steps/itemsStep/itemsStep';

const budgetCalculator = createDecorator({
  field: 'items',
  updates: {
    budget: value => value.reduce((prev, curr) => prev + (curr && curr.budget ? parseInt(curr.budget) : 0), 0),
  },
});

const EstimateForm = ({
  onSave,
  handleSubmit,
  pristine,
  form: { reset, setConfig, change, getState },
  submitting,
}) => {
  const [step, setStep] = useState(1);
  const [validation, setValidation] = useState({ 1: false, 2: false, 3: false });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onChangeStep = index => {
    setConfig('onSubmit', () => {
      setValidation({ ...validation, [step]: true });
      setStep(index);
    });

    handleSubmit();
  };

  const onSubmit = async () => {
    setConfig('onSubmit', onSave);
    setSuccess(false);
    setError(false);

    try {
      const results = await handleSubmit();

      if (results && !results.validationError) {
        setSuccess(true);
        setSuccess(true);
        setStep(1);
        setValidation({ 1: false, 2: false, 3: false });
        reset();
      }
    } catch (error) {
      setError(true);
    }
  };

  const handleAddPromotionItem = item => {
    change('items', [...getState().values.items, item]);
  };

  return (
    <Form success={success} error={error} onSubmit={onSubmit}>
      <Message success header="Form Completed" content="Your message has been sent" />
      <Message error header="Unexpected error" content="Your message has not been sent" />
      Your budget: <Field name="budget" render={({ input }) => input.value || null} />
      <Tabs active={step} validation={validation} onChange={onChangeStep} style={{ marginBottom: '48px' }} />
      {step === 1 && <InfoStep />}
      {step === 2 && <ItemsStep onAddPromotionItem={handleAddPromotionItem} />}
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

export default ({ onSubmit }) => (
  <FinalForm
    decorators={[budgetCalculator]}
    mutators={arrayMutators}
    subscription={{ pristine: true, dirty: true, submitting: true, hasValidationErrors: true }}
    onSubmit={onSubmit}
    onSave={onSubmit}
    component={EstimateForm}
    initialValues={{
      items: [],
    }}
  />
);
