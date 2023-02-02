const express = require('express')
const mongoose = require('mongoose')

//import routes
const userRoutes = require('./routes/users')
const favoriteRoutes = require('./routes/favorites')
const productRoutes = require('./routes/products')

//middleware
const app = express()
app.use(express.json())
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

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
		'mongodb+srv://Comparazon:sharayu2000@cluster0.vkvevwe.mongodb.net/shaurya-test',
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
