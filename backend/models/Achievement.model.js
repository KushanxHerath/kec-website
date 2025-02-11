const mongoose = require('mongoose')

const achievementSchema = new mongoose.Schema({
  route_id: {type:String, required: true, unique:true },
  title: {type:String, required:true},
  thumbnail: {type:String, required:true},
  short_description: {type:String, required:true},
  long_description: {type:String, required:true},
  date:{type:Date, required:true},
  gallery:{type:[String], default:[]}
})

const Achievement = mongoose.model('Achievement' , achievementSchema)

module.exports = {Achievement}