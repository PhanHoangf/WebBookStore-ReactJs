const {getBook, createBook, updateBook, deleteBook} = require('./book.controller')
const express = require('express');
const router = express.Router();
const { updateBookValidation } = require("../../../validation/books/book.validation")

router.get('/', getBook);
router.post('/', createBook);
router.patch('/',updateBookValidation,updateBook);
router.delete('/', deleteBook);

module.exports = router 