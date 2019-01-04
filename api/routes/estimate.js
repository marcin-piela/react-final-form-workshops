
const validate = require('../validation/validate');
const estimateSchema = require('../schema/estimateSchema');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const estimateRoute = {
  method: 'POST',
  path: '/estimate',
  handler: async (request, h) => {
    await sleep(1000);

    const errors = validate(request.payload, estimateSchema);

    if (errors) {
      return h.response(errors).code(400);
    }

    // to simulate server error
    if (request.payload.firstName === 'error') {
      throw 'Error';
    }

    return h
      .response({
        message: 'success',
      })
      .code(200);
  },
};

module.exports = estimateRoute;