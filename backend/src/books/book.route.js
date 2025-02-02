const express = require('express');
const {addABook, getAllBooks, getSingleBook, updateBook, deleteBook} = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router =  express.Router();

// post a book
router.post('/add-book', verifyAdminToken, addABook);

// get all books
router.get('/', getAllBooks);

// get a single book
router.get('/:id', getSingleBook);

// update a book
router.put('/:id', verifyAdminToken, updateBook);

// delete a book
router.delete('/:id', verifyAdminToken, deleteBook);

module.exports = router;