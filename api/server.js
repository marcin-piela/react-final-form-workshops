'use strict';

const Hapi = require('hapi');

const contactRoute = require('./routes/contact');
const estimateRoute = require('./routes/estimate');
const portfolioRoute = require('./routes/portfolio');

const server = Hapi.server({
  port: 4000,
  host: 'localhost',
  routes: {
    cors: true,
  },
});

server.route(contactRoute);

server.route(estimateRoute);

server.route(portfolioRoute);

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
