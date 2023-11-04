require('dotenv').config()

const express = require('express')
const app = express()
const mongose = require('mongoose')


mongose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))
app.use(express.json())

const subRouter = require('./routes/subscribers')
app.use('/subscribers', subRouter)

app.listen(3000, ()=> console.log('Server started'))