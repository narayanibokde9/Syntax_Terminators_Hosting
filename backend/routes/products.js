// const express = require('express')
// const {
// 	show_all_products,
// 	show_product_by_id,
// 	search_page,
// 	filter_page,
// 	brand_list,
// 	storage_list
// } = require('../controllers/productsController')

// const router = express.Router()

// router.get('/showdb', show_all_products)

// router.get('/showPhone/:_id', show_product_by_id)

// router.get('/search', search_page)

// router.get('/filter', filter_page)

// router.get('/brands', brand_list)

// router.get('/storage', storage_list)
// module.exports = router

const express = require("express");
const {
	show_all_products,
	show_product_by_id,
	search_page,
	filter_page,
	brand_list,
	storage_list,
} = require("../controllers/productsController");

const {
	get_fav_items,
	add_fav_item,
	delete_item,
} = require("../controllers/favCartController");

const router = express.Router();

router.get("/showdb", show_all_products);

router.get("/showPhone/:_id", show_product_by_id);

router.get("/search", search_page);

router.get("/filter", filter_page);

router.get("/brands", brand_list);

router.get("/storage", storage_list);

const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);

router.get("/favorites", get_fav_items);

router.post("/favorites", add_fav_item);

router.delete("/favorites", delete_item);

module.exports = router;
