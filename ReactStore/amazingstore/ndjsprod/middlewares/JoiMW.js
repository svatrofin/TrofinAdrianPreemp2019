const Joi = require("joi");

const validatePathParams = schema => (req, res, next) => {
  const result = schema.validate(req.params);
  if (result.error === null) next();
  else res.status(400).json({ error: "invalid id" });
};

const getUserByIDSchema = Joi.object().keys({
  id: Joi.number().integer()
});

module.exports = { getUserByIDSchema, validatePathParams };
