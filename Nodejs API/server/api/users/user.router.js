const { createUser,getUser } = require('./user.controller')

const express = require('express');
const router = express.Router();

// router.post('/', createUser)
router.get('/', getUser);

module.exports = router