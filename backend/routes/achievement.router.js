const {createAchievement, getAllAchievements} = require('../controllers/achievements.controller.js')

const express = require('express')
const router = express.Router()

router.get('/' , getAllAchievements)
router.post('/' , createAchievement)

router.get('/:router_id' , (req,res)=> {
  res.send(req.params)})


module.exports = router