const express = require('express');
const committeesController = require('../controllers/committees.controller.js');

const router = express.Router();

// Define routes
router.get('/', committeesController.getCommittees);

module.exports = router;
