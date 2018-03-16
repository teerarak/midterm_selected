const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./convertcsv.json', 'utf8'));
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/eiei', (req, res) => {
    var x = {
        "name": "fluke",
        "age": 22
    }
    res.send(obj)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))