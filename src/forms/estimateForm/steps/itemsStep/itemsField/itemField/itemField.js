import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Field } from 'react-final-form';

import { InputField } from '../../../../../fields';
import { isRequired } from '../../../../../validation';

export const ItemField = ({ input, index }) => (
  <Grid>
    <Grid.Row style={index === 0 ? { paddingTop: 0 } : {}}>
      <Grid.Column width={8}>
        <Field
          name={`${input.name}.name`}
          type="text"
          component={InputField}
          label={`#${index + 1} name`}
          inline={true}
          required
          validate={isRequired}
        />
      </Grid.Column>
      <Grid.Column width={8}>
        <Field
          name={`${input.name}.budget`}
          type="number"
          component={InputField}
          label={`Budget`}
          inline={true}
          required
          validate={isRequired}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
