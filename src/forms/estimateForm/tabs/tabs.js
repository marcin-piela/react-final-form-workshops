import React from 'react';
import { Step } from 'semantic-ui-react';

export const Tabs = ({ style, active, onChange, validation }) => (
  <Step.Group ordered widths={3} style={style}>
    <Step completed={validation[1]} active={active === 1} onClick={() => onChange(1)}>
      <Step.Content>
        <Step.Title>Title</Step.Title>
        <Step.Description>Define title and description of project</Step.Description>
      </Step.Content>
    </Step>

    <Step completed={validation[2]} active={active === 2} onClick={() => onChange(2)}>
      <Step.Content>
        <Step.Title>Items</Step.Title>
        <Step.Description>Define required items in project</Step.Description>
      </Step.Content>
    </Step>

    <Step onClick={() => onChange(3)} active={active === 3}>
      <Step.Content>
        <Step.Title>Contact details</Step.Title>
        <Step.Description>Define contact information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);
