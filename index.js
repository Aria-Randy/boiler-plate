const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Yun:1234@boiler-plate.3v2ds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})