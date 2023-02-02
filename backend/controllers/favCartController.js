const FavCart = require("../models/favoritesCart");
const Product = require("../models/product");

module.exports.get_fav_items = async (req, res) => {
	const user_id = req.user._id;
	const fav_cart = await FavCart.findById(user_id);
	const fav_items = fav_cart.items;
	res.json(fav_items);
};

module.exports.add_fav_item = async (req, res) => {
	const user_id = req.user._id;
	const product_id = req.body._id;
	const product_title = req.body.title;

	const newFavProduct = await Product.find({ title: product_title });
	const fav_id = newFavProduct._id;

	let fav_cart = await FavCart.findById(user_id);
	let itemIndex = fav_cart.items.findIndex((p) => p._id == product_id);

	if (itemIndex > -1) {
		let productItem = fav_cart.items[itemIndex];
		fav_cart.items[itemIndex] = productItem;
	} else fav_cart.items.push(req.body);

	fav_cart = await fav_cart.save();
};

module.exports.delete_item = async (req, res) => {
	const user_id = req.user._id;
	const product_id = req.body._id;

	let fav_cart = await FavCart.findById(user_id);
	let itemIndex = fav_cart.items.findIndex((p) => p._id == product_id);
	if (itemIndex > -1) {
		let productItem = fav_cart.items[itemIndex];
		fav_cart.items.splice(itemIndex, 1);
	}
	cart = await fav_cart.save();
	return res.status(201).send(fav_cart);
};
