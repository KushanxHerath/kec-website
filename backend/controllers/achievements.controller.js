const {Achievement} = require('../models/Achievement.model.js')

const createAchievement = async (req, res) => {
  try {
    const achievement = new Achievement(req.body);
    
    const savedAchievement = await achievement.save();
    res.status(201).json(savedAchievement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getAllAchievements = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10; // Default limit is 10
    const sortOrder = req.query.sort === 'desc' ? -1 : 1; // Default to ascending order if not 'desc'

    const achievements = await Achievement.find()
      .sort({ date: sortOrder })
      .limit(limit); 
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {createAchievement, getAllAchievements}