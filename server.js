//Install express server
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose')

const dbConfig = require('./server/db')
const route = require('./server/api')

mongoose.Promise = global.Promise
mongoose.connect( dbConfig.db, {
	useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
}).then(() => {
		console.log('Database connected Successfully')
	},
	error => {
		console.log('Could not connected to database : ' + error)
	}
)

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbConfig.db}`);
});
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});


const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist/school')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', route)

// app.get('/api/gallery', (req, res) => {
// 	Gallery.find({}, (err, gallery) => {
// 		if(err)
// 			return res.status(401).json(false)
// 		else {
// 			//console.log(gallery)
// 			return res.status(200).json(gallery)
// 		}
// 	})
// })

// app.get('/api/gallery/:id', (req, res) => {
// 	id = req.params.id
// 	console.log(id)
// 	Gallery.findOne({ _id: id })
// 			.exec((err, album) => {
// 				if(err || !album)
// 					return res.status(401).json(false)
// 				else
// 					return res.status(200).json(album)
// 			})
// })

// app.post('/api/putAlbum', (req, res) => {
// 	Gallery.create(req.body, function (error, album) {
// 		if (error) {
// 			return res.status(401).json(false);
// 		}
// 		else {
// 			console.log('added!')
// 			return res.status(200).json(album);
// 		}
// 	})
// })


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/school/index.html'))
})



// Start the app by listening on the default Heroku port
const port = process.env.PORT || 3000
app.listen(port, function() {
	console.log('Server running on localhost:' + port)
});