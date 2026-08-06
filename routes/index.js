const router = require("express").Router();

const usersRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

const { createUser, login } = require("../controllers/users");

const {
  validateUserBody,
  validateAuthentication,
} = require("../middlewares/validation");

router.post("/signin", validateAuthentication, login);

router.post("/signup", validateUserBody, createUser);

router.use("/users", usersRouter);
router.use("/items", clothingItemsRouter);

module.exports = router;
