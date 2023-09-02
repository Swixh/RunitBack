const express = require('express')
const app = express()
const PORT = 3001

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json({user: 'gay'})
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}`)
})