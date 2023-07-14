const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/user-controller");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../validators/user-validators");

router.post(
  "/register",
  validateBody(schemas.userAuthSchema, "missing fields"),
  ctrl.registerUser
);

module.exports = router;
