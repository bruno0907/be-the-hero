const express = require('express')
const http = require('http')

const cors = require('cors')

const routes = require('./routes')

require('dotenv').config()


const app = express()
const server = http.Server(app)

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3333



app.use(routes)

server.listen(PORT, function() {
        console.log(`Server running on ${this.address().port}`)
})