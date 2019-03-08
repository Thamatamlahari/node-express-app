const express = require('express')
const app = express()

const hostname = '127.0.0.1'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.send('<h1>Good to see u!!!!!!</h1>')
})

app.get('/go1', (req, res) => {
  res.send('you are worth it')
})

app.get('/smile',  (req, res) =>{
  res.send('<h1>Dont forget to smile!</h1>')
})

app.get('/me', function (req, res) {
  res.send('<h1 id="abc">Click to see me</h1>'.fontcolor("blue").italics().link("https://media1.giphy.com/media/eaECZB7V6GACc/giphy.gif?cid=3640f6095c82df1c7957686e55394e00"))
})


app.get('/good/:id',  (req, res) =>{
  res.send('This is the id ' + req.params.id)
})

app.get('/Hey/:you',  (req, res) =>{
  res.send('<h1>Hey, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

