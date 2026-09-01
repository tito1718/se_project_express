const router = require("express").Router();
const { celebrate, Joi, Segments } = require("celebrate");

const { getWeather } = require("../controllers/weather");

const validateCoordinates = celebrate({
  [Segments.QUERY]: Joi.object({
    latitude: Joi.number().min(-90).max(90).required(),
    longitude: Joi.number().min(-180).max(180).required(),
  }),
});

router.get("/", validateCoordinates, getWeather);

module.exports = router;
