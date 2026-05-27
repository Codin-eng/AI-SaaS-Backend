const express = require("express");

const protect = require("../middleware/auth.middleware");

const {
  create,
  getAll,
  update,
  remove,
} = require("../clients/clients.controller");

const router = express.Router();

router.use(protect);

router.post("/", create);

router.get("/", getAll);

router.put("/:id", update);

router.delete("/:id", remove);

module.exports = router;