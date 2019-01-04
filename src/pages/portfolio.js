import React, { useEffect } from 'react';
import { Segment, Grid, Card, Icon, Image, Loader, Dimmer } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { fetchPortfolio } from '../store/portfolio/portfolioActions';

import Layout from 'shared/layout/layout';
import Footer from 'shared/footer/footer';

const Portfolio = ({ onFetchPortfolio, portfolio }) => {
  useEffect(() => {
    if (!portfolio.loading && portfolio.data.length === 0 && !portfolio.error) {
      onFetchPortfolio();
    }
  });

  return (
    <Layout>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <h1>Our last projects</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            {portfolio.loading && (
              <Dimmer active inverted>
                <Loader inverted content="Loading" />
              </Dimmer>
            )}

            <Grid.Column width={14}>
              <Card.Group>
                {portfolio.data.map((page, index) => (
                  <Card key={index}>
                    <Image src={page.image} />
                    <Card.Content>
                      <Card.Header>{page.title}</Card.Header>
                      <Card.Meta>
                        <span className="date">Developed in 2019</span>
                      </Card.Meta>
                      <Card.Description>{page.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="browser" />
                      {page.url}
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Footer />
    </Layout>
  );
};

export default compose(
  connect(
    ({ portfolio }) => ({
      portfolio,
    }),
    dispatch => ({
      onFetchPortfolio: () => dispatch(fetchPortfolio()),
    })
  )
)(Portfolio);
