const express = require('express');
const achievementsController = require('../controllers/achievements.controller.js');

const router = express.Router();


router.get('/', achievementsController.getAchievements)

module.exports = router;
