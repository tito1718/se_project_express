const router = require("express").Router();

const auth = require("../middlewares/auth");
const { validateProfileBody } = require("../middlewares/validation");

const {
  getCurrentUser,
  updateProfile,
  deleteCurrentUser,
} = require("../controllers/users");

router.use(auth);

router.get("/me", getCurrentUser);

router.patch("/me", validateProfileBody, updateProfile);
router.delete("/me", deleteCurrentUser);

module.exports = router;
