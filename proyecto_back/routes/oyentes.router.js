const express = require("express")
const router = express.Router()
const oyentesController = require("../controllers/oyentes.controller")

router.post("/", oyentesController.create)
router.get("/", oyentesController.find)
router.get("/:id", oyentesController.findOne)
router.put("/:id", oyentesController.update)
router.delete("/:id", oyentesController.remove)

module.exports = router