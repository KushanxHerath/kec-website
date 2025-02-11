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


const getAllAchievements = async(req,res) => {
  try{
    const achievements = await Achievement.find()
    res.status(200).json(achievements)
  }catch(err){
    res.status(404).send(err.message)
  }
}

module.exports = {createAchievement, getAllAchievements}