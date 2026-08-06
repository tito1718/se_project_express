const { celebrate, Joi } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }

  return helpers.error("string.uri");
};

const validateItemBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
      "any.required": 'The "name" field is required',
    }),

    weather: Joi.string()
      .required()
      .valid("hot", "warm", "cold", "freezing")
      .messages({
        "any.only": 'The "weather" field must contain a valid weather type',
        "string.empty": 'The "weather" field must be filled in',
        "any.required": 'The "weather" field is required',
      }),

    imageUrl: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'The "imageUrl" field must be a valid URL',
      "any.required": 'The "imageUrl" field is required',
    }),
  }),
});

const validateUserBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    avatar: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "avatar" field must be filled in',
      "string.uri": 'The "avatar" field must be a valid URL',
      "any.required": 'The "avatar" field is required',
    }),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateAuthentication = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateProfileBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    avatar: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "avatar" field must be filled in',
      "string.uri": 'The "avatar" field must be a valid URL',
      "any.required": 'The "avatar" field is required',
    }),
  }),
});

const validateItemId = celebrate({
  params: Joi.object().keys({
    itemId: Joi.string().required().hex().length(24),
  }),
});

module.exports = {
  validateItemBody,
  validateUserBody,
  validateAuthentication,
  validateProfileBody,
  validateItemId,
};
