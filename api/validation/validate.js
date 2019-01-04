const Joi = require('joi');

const validate = (value, schema) => {
  const { error } = Joi.validate(value, schema, { abortEarly: false, allowUnknown: true });

  if (error) {
    return error.details.reduce((prev, curr) => ({ ...prev, [curr.path[0]]: curr.message }), { error: true });
  }

  return null;
};

module.exports = validate;