const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritesCart = new Schema({
	user_id: {
		type: String,
	},
	items: [],
});

module.exports = mongoose.model("FavoritesCart", FavoritesCart);
