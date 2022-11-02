const express = require('express')
const app = express()
const port = 3001
const path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/add-post', function (req, res) {
    res.send('Hello Borld')
  })

  // Static directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`server listening on port: http://localhost:${port}`)
})