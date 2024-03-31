// routes/user.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// GET /users - Display users in a table
router.get('/', UserController.getAllUsers);

module.exports = router;
