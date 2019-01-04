const Joi = require('joi');

const contactSchema = Joi.object().keys({
  firstName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string().email({ minDomainAtoms: 2 }),
});

module.exports = contactSchema;
