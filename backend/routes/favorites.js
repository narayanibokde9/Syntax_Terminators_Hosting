const express = require("express");
const {
	get_fav_items,
	add_fav_item,
	delete_item,
} = require("../controllers/favCartController");

const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

router.use(requireAuth);

router.get("/favorites", get_fav_items);

router.post("/favorites", add_fav_item);

router.delete("/favorites", delete_item);

module.exports = router;
