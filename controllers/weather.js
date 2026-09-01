const { WEATHER_API_KEY } = require("../utils/config");

const getWeather = async (req, res, next) => {
  try {
    if (!WEATHER_API_KEY) {
      throw new Error("WEATHER_API_KEY is not configured");
    }

    const parameters = new URLSearchParams({
      lat: req.query.latitude,
      lon: req.query.longitude,
      units: "imperial",
      appid: WEATHER_API_KEY,
    });

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${parameters.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Weather provider returned status ${response.status}`);
    }

    return res.send(await response.json());
  } catch (err) {
    return next(err);
  }
};

module.exports = { getWeather };
