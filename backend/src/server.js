const app = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 3333

app.listen(PORT, function() {
    console.log(`Server running on ${this.address().port}`)
})