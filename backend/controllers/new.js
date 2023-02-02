const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");

const Products = require("../models/product");

const mongoURI =
	"mongodb+srv://Comparazon:sharayu2000@cluster0.vkvevwe.mongodb.net/test";

const app = express();

app.use(express.json());

// connect to mongodb
mongoose.connect(mongoURI).then(() => console.log("db connected"));

app.get("/", (req, res) => {
	res.send({
		title: "hello world",
	});
});

const data = JSON.parse(fs.readFileSync("../../data/products.json", "utf-8"));

// console.log(data);

// import data to MongoDB
const importData = async () => {
	try {
		await Products.create(data);
		console.log("data successfully imported");
		// to exit the process
		process.exit();
	} catch (error) {
		console.log("error", error);
	}
};

importData()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
