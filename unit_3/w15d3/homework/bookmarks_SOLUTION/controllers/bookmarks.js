const express = require('express');
const router = express.Router();
const Bookmarks = require('../models/bookmarks');

// Seeds Data
router.get('/seed', async (req, res) => {
    const newBookmarks =[
        {
            title: 'Search Engine',
            url: 'www.google.com'
        }, 
        {
            title: 'Consumer Products',
            url: 'www.apple.com'
        }, 
        {
            title: 'Software Company',
            url: 'www.microsoft.com'
        }
    ]

    try {
        const seedItems = await Bookmarks.create(newBookmarks);
        res.send(seedItems);
    }
    
    catch (err) {
        res.send(err.message);
    }
})

// Index: Getting all bookmarks
router.get('/', (req, res) => {
    Bookmarks.find({}, (err, foundBookmark) => {
        res.json(foundBookmark);
    })
})

// Delete: Deleting a bookmark
router.delete('/:id', (req, res) => {
    Bookmarks.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
        res.json(deletedBookmark);
    })
})

// Create: Posting a new bookmark
router.post('/', (req, res) => {
    Bookmarks.create(req.body, (err, createdBookmark) => {
        res.json(createdBookmark);
    })
})

// Update: Updating a bookmark
router.put('/:id', (req, res) => {
    Bookmarks.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBookmark) => {
        res.json(updatedBookmark);
    })
})

module.exports = router;