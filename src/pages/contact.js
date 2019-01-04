import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import Layout from 'shared/layout/layout';
import Footer from 'shared/footer/footer';

import { ContactFormContainer } from '../forms/contactForm/contactFormContainer';

const Contact = () => (
  <Layout>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16}>
            <h1>Contact</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={8}>
            <ContactFormContainer/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </Layout>
);

export default Contact;
