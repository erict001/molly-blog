const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// Static directory
app.use(express.static('public'));

app.get('/', function (req, res) {
    // res.send('Hello Borld')
  res.sendFile(path.join(__dirname, '/public/views/index.html'))
})

app.get('/add-post', function (req, res) {
    res.send('Hello Borld')
  })


app.listen(port, () => {
    console.log(`server listening on port: http://localhost:${port}`)
})