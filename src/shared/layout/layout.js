import React, { Fragment, useState } from 'react';
import { Button, Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

const MenuItems = pathname => (
  <Fragment>
    <Menu.Item as={Link} to="/" active={pathname === '/'}>
      Home
    </Menu.Item>
    <Menu.Item as={Link} to="/portfolio/" active={pathname === '/portfolio/'}>
      Portfolio
    </Menu.Item>
    <Menu.Item as={Link} to="/contact/" active={pathname === '/contact/'}>
      Contact
    </Menu.Item>
    <Menu.Item as={Link} to="/estimate-project/" active={pathname === '/estimate-project/'}>
      Estimate project
    </Menu.Item>
  </Fragment>
);

const DesktopContainer = ({ heading: Heading, children, location: { pathname } }) => {
  const [fixed, setFixed] = useState(false);

  return (
    <Responsive
      getWidth={() => (typeof window === 'undefined' ? 1200 : window.innerWidth)}
      minWidth={Responsive.onlyTablet.minWidth}
    >
      <Visibility once={false} onBottomPassed={() => setFixed(true)} onBottomPassedReverse={() => setFixed(false)}>
        <Segment inverted textAlign="center" style={{ minHeight: Heading ? 700 : 120, padding: '1em 0em' }} vertical>
          <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
            <Container>
              {MenuItems(pathname)}

              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          {!!Heading && <Heading />}
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  );
};

const MobileContainer = ({ heading: Heading, children, location: { pathname } }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <Sidebar.Pushable>
        <Sidebar as={Menu} animation="uncover" inverted vertical visible={sidebarOpened}>
          {MenuItems(pathname)}

          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher
          dimmed={sidebarOpened}
          onClick={() => sidebarOpened && setSidebarOpened(false)}
          style={{ minHeight: '100vh' }}
        >
          <Segment inverted textAlign="center" style={{ minHeight: Heading ? 350 : 100, padding: '1em 0em' }} vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={() => setSidebarOpened(!sidebarOpened)}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            {!!Heading && <Heading mobile />}
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Responsive>
  );
};

const Layout = ({ children, heading }) => (
  <Location>
    {({ location }) => (
      <Fragment>
        <DesktopContainer heading={heading} location={location}>
          {children}
        </DesktopContainer>
        <MobileContainer heading={heading} location={location}>
          {children}
        </MobileContainer>
      </Fragment>
    )}
  </Location>
);

export default Layout;
