import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.BE_PORT || 5000

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});