const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res)=> {
    const html = fs.readFileSync('express-app/index.html')
    res.send(html.toString())
})

app.get('/about', (req, res) => {
    const html = fs.readFileSync('express-app/about.html')
    res.send(html.toString())
})

app.listen(port, () => {
    console.log(`Express app running on ${port}`)
})

module.exports = app