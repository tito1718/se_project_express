const test = require("node:test");
const assert = require("node:assert/strict");

process.env.WEATHER_API_KEY = "test-weather-key";

const { getWeather } = require("../controllers/weather");

test("returns weather data for valid coordinates", async () => {
  const originalFetch = global.fetch;
  const weatherData = {
    name: "New York",
    main: { temp: 72 },
    weather: [{ main: "Clear" }],
    sys: { sunrise: 1, sunset: 2 },
  };

  global.fetch = async (url) => {
    assert.match(url, /lat=40\.7128/);
    assert.match(url, /lon=-74\.006/);
    assert.match(url, /units=imperial/);
    assert.match(url, /appid=test-weather-key/);

    return {
      ok: true,
      json: async () => weatherData,
    };
  };

  let responseBody;

  await getWeather(
    {
      query: {
        latitude: "40.7128",
        longitude: "-74.006",
      },
    },
    {
      send(data) {
        responseBody = data;
        return this;
      },
    },
    (err) => assert.fail(err)
  );

  global.fetch = originalFetch;
  assert.deepEqual(responseBody, weatherData);
});

test("forwards weather-provider failures to error handling", async () => {
  const originalFetch = global.fetch;

  global.fetch = async () => ({
    ok: false,
    status: 401,
  });

  let receivedError;

  await getWeather(
    {
      query: {
        latitude: "40.7128",
        longitude: "-74.006",
      },
    },
    {
      send() {
        assert.fail("A failed provider response must not be sent as success");
      },
    },
    (err) => {
      receivedError = err;
    }
  );

  global.fetch = originalFetch;

  assert.equal(
    receivedError.message,
    "Weather provider returned status 401"
  );
});
