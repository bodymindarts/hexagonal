/// IO layer (incoming adapter)

import express from 'express'
import * as App from "./app"

const app = express()
const port = 3000

// end to end tests

app.get('/counter', (req, res) => {
  const counter = App.getCounterValue()
  res.send(`Counter is: ${counter}\n`)
})

app.post('/inc/:amount', (req, res) => {
  const counter = App.incrementCounter(parseInt(req.params.amount))
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
