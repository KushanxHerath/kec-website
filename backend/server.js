const express = require('express');
require('dotenv').config();

const achievementsRouter = require('./routes/achievements.router.js');
const committeesRouter = require('./routes/committees.router.js');


const app = express()
const PORT = process.env.BE_PORT || 5000;

//Define Middlewares
app.use(express.json())



//Define Routes
app.use('/api/achievements' , achievementsRouter)






//Start the server
app.listen(PORT , ()=>{
  console.log(`Server running on http://localhost:${PORT}`);
  
})