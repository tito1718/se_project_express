require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");
const mongoose = require("mongoose");
const { errors } = require("celebrate");

const { requestLogger, errorLogger } = require("./middlewares/logger");

const routes = require("./routes");
const errorHandler = require("./middlewares/error-handler");
const NotFoundError = require("./errors/not-found-error");
const { DATABASE_URL } = require("./utils/config");

const app = express();

const { PORT = 3001 } = process.env;

mongoose.connect(DATABASE_URL).catch((err) => {
  console.error("MongoDB connection failed:", err);
  process.exit(1);
});

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://tito-wtwr.crabdance.com",
  "https://whattowear.ldtp.com",
];

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors({ origin: allowedOrigins }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(express.json({ limit: "100kb" }));
app.use(requestLogger);

app.use("/", routes);

app.use((_req, _res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
