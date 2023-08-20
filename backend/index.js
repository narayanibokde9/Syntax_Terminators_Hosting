const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");


//import routes
const userRoutes = require('./routes/users')
const favoriteRoutes = require('./routes/favorites')
const productRoutes = require('./routes/products')

//middleware
// Allow requests from any origin

const app = express()

// app.use(
// 	cors({
// 		origin: "https://syntax-terminators-hosting.vercel.app",
// 		optionsSuccessStatus: 200,
// 	})
// );

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200
  })
);

app.use(express.json())
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})
// Add headers before the routes are defined
//models
const TimeStamp = require('./models/time')
app.get("/time", (req, res) => {
	TimeStamp.find()
		.then((items) => res.json(items))
		.catch((e) => console.log(e));
});

//routes
app.use('/comparazon/user', userRoutes)
app.use('/products', productRoutes)
app.use('/user', favoriteRoutes)

//server connect with db 
mongoose
	.connect(
		'mongodb+srv://Comparazon:sharayu2000@cluster0.vkvevwe.mongodb.net/test',
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		console.log('CONNECTION FOR MONGODB OPEN!!!')
	})
	.catch((err) => {
		console.log('OH NO ERROR FOR MONGODB!!!!')
		console.log(err)
	})

app.listen(4000, () => {
	console.log('Listening to port 4000')
})
