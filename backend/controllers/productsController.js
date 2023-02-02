const Product = require("../models/product");

module.exports.show_all_products = (req, res) => {
	Product.find({})
		.then((items) => res.json(items))
		.catch((e) => console.log(e));
};

module.exports.show_product_by_id = (req, res) => {
	const { _id } = req.params;
	console.log(_id);
	Product.findById(_id)
		.then((items) => res.json(items))
		.catch((e) => console.log(e));
};

module.exports.search_page = async (req, res) => {
	const query = req.query.search || {};
	const { searchQuery } = req.query;
	const page = parseInt(req.query.page) || 1;
	const pageSize = 5;
	const title = new RegExp(searchQuery, "i");

	Product.find({ title })
		.skip((page - 1) * pageSize)
		.limit(pageSize)
		.then((phones) => {
			Product.countDocuments({ title })
				.then((count) => res.json({ phones, count }))
				.catch((error) => res.status(404).json({ message: error.message }));
		})
		.catch((error) => res.status(500).json({ error }));
};

module.exports.filter_page = async (req, res) => {
	let { brand, price, priceSort, ratingSort } = req.query;
	console.log(brand.split(","), priceSort);

	try {
		// if (price.length > 0) {
		console.log(price.split("to"));
		const pricemin = price.split("to")[0];
		const pricemax = price.split("to")[1];
		console.log(pricemin, pricemax);

		const phones = await Product.find({
			$and: [
				{ brand: { $in: brand.split(",") } },
				{ price: { $gt: pricemin, $lt: pricemax } },
			],
		}).sort([
			["price", priceSort],
			["star_rating", ratingSort],
		]);
		res.json(phones);
		// } else {
		// 	const phones = await Product.find({
		// 		brand: { $in: brand.split(",") },
		// 	}).sort([
		// 		["price", priceSort],
		// 		["star_rating", ratingSort],
		// 	]);
		// 	res.json(phones);
		// }
		// console.log(phones)
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports.brand_list = (req, res) => {
	Product.distinct("brand", (err, brands) => {
		if (err) return console.error(err);
		res.send(brands);
	});
};

module.exports.storage_list = (req, res) => {
	Product.distinct("storage_cap", (err, brands) => {
		if (err) return console.error(err);
		res.send(brands);
	});
};
