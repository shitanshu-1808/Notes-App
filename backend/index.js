import express from 'express';
import dotenv from 'dotenv';
import conn from './conn/conn.js';
import noteRoutes from './routes/note.routes.js'

dotenv.config()
const app = express()
const port = process.env.PORT||4000

conn();
app.use(express.json());

app.use("/api/v1/noteapp",noteRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})