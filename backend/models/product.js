const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	url: {
		type: String,
		required: true,
	},
	img_url: {
		type: String,
	},
	title: {
		type: String,
		required: true,
	},
	brand: { type: String },
	model_name: { type: String },
	price: { type: String },
	star_rating: { type: String },
	colour: { type: String },
	storage_cap: { type: Array },
	flipkart_url: { type: String },
	flipkart_price: { type: String },
	flipkart_star_rating: { type: String },
	flipkart_no_rating: { type: String },
});

module.exports = mongoose.model("Product", ProductSchema);
