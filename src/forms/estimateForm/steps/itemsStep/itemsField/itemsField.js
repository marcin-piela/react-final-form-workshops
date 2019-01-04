import React from 'react';
import { Button, List, Icon } from 'semantic-ui-react';
import { Field } from 'redux-form';

import { ItemField } from './itemField/itemField';

export const ItemsField = ({ fields, meta }) => (
  <List divided verticalAlign="middle">
    {fields.map((item, index) => (
      <List.Item key={index} style={index === 0 ? { padding: '0 0 16px' } : { padding: '16px 0' }}>
        <List.Content floated="right">
          <Button type="button" onClick={() => fields.remove(index)} icon>
            <Icon name="remove" />
          </Button>
        </List.Content>
        <List.Content>
          <Field component={ItemField} name={item} index={index} />
        </List.Content>
      </List.Item>
    ))}

    <List.Item style={{ paddingTop: '16px' }}>
      <List.Content floated="right">
        <Button type="button" onClick={() => fields.push()}>
          Add item
        </Button>
      </List.Content>
    </List.Item>

    {meta && meta.error && meta.submitFailed && (
      <span style={{color: 'red'}}>{meta.error}</span>
    )}
  </List>
);
