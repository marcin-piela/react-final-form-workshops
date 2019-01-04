import React, { Fragment } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Step, Icon } from 'semantic-ui-react';

import { TextAreaField } from '../../../fields';
import { ItemsField } from './itemsField/itemsField';

export const ItemsStep = ({ items, onAddPromotionItem }) => {
  return (
    <Fragment>
      <div style={{ marginBottom: '32px' }}>
        <Step.Group style={{ marginRight: '16px' }}>
          <Step onClick={() => onAddPromotionItem(items, { name: 'Wordpress', budget: 2000 })}>
            <Icon name="wordpress" />
            <Step.Content>
              <Step.Title>Wordpress $2000</Step.Title>
              <Step.Description>Wordpress template promotion.</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
        <Step.Group>
          <Step onClick={() => onAddPromotionItem(items, { name: 'Symfony', budget: 4000 })}>
            <Icon name="php" />
            <Step.Content>
              <Step.Title>Symfony $4000</Step.Title>
              <Step.Description>Symfony app promotion</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>

      <FieldArray
        name="items"
        component={ItemsField}
        validate={items => (items && items.length > 0 ? undefined : 'Add at least one item')}
      />

      <Field name="itemsNotes" label="Type notes of items" component={TextAreaField} placeholder="Notes" />
    </Fragment>
  );
};
