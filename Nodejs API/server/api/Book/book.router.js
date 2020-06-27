const {getBook, createBook, updateBook} = require('./book.controller')
const express = require('express');
const router = express.Router();
const { updateBookValidation } = require("../../../validation/books/book.validation")

router.get('/', getBook);
router.post('/', createBook);
router.patch('/',updateBookValidation,updateBook);

module.exports = router 