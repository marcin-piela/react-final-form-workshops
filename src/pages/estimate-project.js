import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import Layout from 'shared/layout/layout';
import Footer from 'shared/footer/footer';

import { EstimateFormContainer } from '../forms/estimateForm/estimateFormContainer';

const EstimateProject = () => (
  <Layout>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16}>
            <h1>Estimate project</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={10}>
            <EstimateFormContainer/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </Layout>
);

export default EstimateProject;
