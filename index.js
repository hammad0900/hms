const express = require('express')
const morgan = require('morgan')
const app = express()
require('./db')

app.use(express.json())
app.use(morgan('dev'))

app.use('/api',require('./server/api/users/userRoute'))

app.listen(8080,()=>console.log("Listening on port 8080"))