const express = require("express");

const ctrl = require("../../controllers/contacts-controller");
const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../models/contact-model");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post(
  "/",
  validateBody(schemas.addSchema, `missing fields`),
  ctrl.addContact
);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema, `missing field favorite`),
  ctrl.updateFavorite
);

router.delete("/:id", isValidId, ctrl.deleteContact);

module.exports = router;
