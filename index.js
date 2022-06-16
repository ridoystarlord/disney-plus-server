import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

import movieRoute from "./routes/movie"

const app = express()
const port = 5000
// const connectionURL = "mongodb://localhost:27017/movie"
const connectionURL = "mongodb+srv://mydbuser1:glZXT0NZWuIppXg6@cluster0.pas4h.mongodb.net/movie?retryWrites=true&w=majority"

app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use('/movie', movieRoute)

app.get('/', (req, res) => {
    res.send("Welcome to Disney Plus")
})

mongoose.connect(connectionURL)
    .then(() => app.listen(port, () => console.log(`Server is Running on port ${port}`)))
    .catch((error) => console.log(error.message));
