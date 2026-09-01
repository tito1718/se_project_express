const {
  JWT_SECRET = "dev-secret-key",
  DATABASE_URL = "mongodb://127.0.0.1:27017/wtwr_db",
  WEATHER_API_KEY,
} = process.env;

if (process.env.NODE_ENV === "production" && JWT_SECRET === "dev-secret-key") {
  throw new Error("JWT_SECRET must be configured in production");
}

module.exports = {
  JWT_SECRET,
  DATABASE_URL,
  WEATHER_API_KEY,
};
