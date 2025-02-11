const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const achievementRoutes = require('./routes/achievement.router.js');
require('dotenv').config();

const app = express();
const PORT = process.env.BE_PORT || 5000;



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(cors()); // Allow frontend requests
app.use(express.json());


app.use('/api/achievements/', achievementRoutes);

mongoose.connect(`mongodb+srv://kushanherathpersonal:${process.env.DB_PASSWORD}@kecwebsite.mgete.mongodb.net/test`)
  .then(() => console.log('Connected to the MongoDB database successfully...'))
  .catch(err => console.error("Couldn't connect to the database", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
