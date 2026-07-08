const router = require("express").Router();

const usersRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

router.use("/users", usersRouter);
router.use("/items", clothingItemsRouter);

router.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

module.exports = router;
