const express = require("express");

const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post(
  "/",
  validateBody(schemas.addSchema, `missing fields`),
  ctrl.addContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema, `missing field favorite`),
  ctrl.updateFavorite
);

router.delete("/:id", isValidId, ctrl.deleteContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;
