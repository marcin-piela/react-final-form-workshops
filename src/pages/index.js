import React from 'react';
import { Container, Header, Button, Icon, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'gatsby';

import Layout from 'shared/layout/layout';
import Footer from 'shared/footer/footer';

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="🏁 PORTFOLIO page"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as="h2"
      content="Let's see our last projects"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Link to="/portfolio/">
      <Button primary size="huge">
        Go!
        <Icon name="right arrow" />
      </Button>
    </Link>
  </Container>
);
const IndexPage = () => (
  <Layout heading={HomepageHeading}>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <h1>Hi devs,</h1> let's migrate <strong>redux-form</strong> to <strong>final-form</strong> ;)
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </Layout>
);
export default IndexPage;
