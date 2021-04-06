const express = require('express')
const router = express.Router()

const Gallery = require('./gallery.model')
const Video = require('./video.model')

router.get('/gallery', (req, res) => {
    Gallery.find({}, (err, gallery) => {
        if (err)
            return res.status(401).json(false)
        else {
            //console.log(gallery)
            return res.status(200).json(gallery)
        }
    })
})

router.get('/gallery/:id', (req, res) => {
    id = req.params.id
    console.log(id)
    Gallery.findOne({ _id: id })
        .exec((err, album) => {
            if (err || !album)
                return res.status(401).json(false)
            else
                return res.status(200).json(album)
        })
})

router.post('/putAlbum', (req, res) => {
    Gallery.create(req.body, function (error, album) {
        if (error) {
            return res.status(401).json(false);
        }
        else {
            console.log('added!')
            return res.status(200).json(album);
        }
    })
})


router.get('/video', (req, res) => {
    Video.find({}, (err, videos) => {
        if (err)
            return res.status(401).json(false)
        else {
            //console.log(gallery)
            return res.status(200).json(videos)
        }
    })
})

router.get('/video/:id', (req, res) => {
    id = req.params.id
    console.log(id)
    Video.findOne({ _id: id })
        .exec((err, album) => {
            if (err || !album)
                return res.status(401).json(false)
            else
                return res.status(200).json(album)
        })
})

router.post('/putVideo', (req, res) => {
    Video.create(req.body, function (error, album) {
        if (error) {
            return res.status(401).json(false);
        }
        else {
            console.log('added!')
            return res.status(200).json(album);
        }
    })
})



module.exports = router