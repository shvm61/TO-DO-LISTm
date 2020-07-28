const express = require("express");

const router = express.Router();
const itemController = require("../controllers/item_controller");

console.log("router loaded");

router.get("/", itemController.home);
router.post("/create-item", itemController.createItem);
router.get("/delete-item", itemController.deleteItem);
router.get("/complete-item", itemController.completeItem);
// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;
