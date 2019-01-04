import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import Layout from 'shared/layout/layout';
import Footer from 'shared/footer/footer';

const NotFound = () => (
  <Layout>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <h1>404 Not found</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </Layout>
);

export default NotFound;
