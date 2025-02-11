const express = require('express');
const mongoose = require('mongoose')

const achievementRoutes = require('./routes/achievement.router.js')
require('dotenv').config();


const app = express()
const PORT = process.env.BE_PORT || 5000;

//Define Middlewares
app.use(express.json())

app.use('/api/achievements/' , achievementRoutes)





mongoose.connect(`mongodb+srv://kushanherathpersonal:${process.env.DB_PASSWORD}@kecwebsite.mgete.mongodb.net/test`)
  .then(()=> console.log('Connected to the mongo db database successfully...'))
  .catch(err => console.err("couldn't connect to the database"))

//Start the server
app.listen(PORT , ()=>{
  console.log(`Server running on http://localhost:${PORT}`);
})

