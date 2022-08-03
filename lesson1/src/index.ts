import express from 'express'

const app = express()
const port = 3000

let counter = 0

const ApplicationService = () => {
  let counter: number = 0

  const getCounter = () => {
    return counter
  }

  const incrementCounter = (increment: number) => {
    counter += increment
  }

  return {
    getCounter,
    incrementCounter
  }
}

const appSvc = ApplicationService()

app.get('/counter', (req, res) => {
  const counter = appSvc.getCounter()
  res.send(`Counter is: ${counter}\n`)
})

app.post('/inc/:amount', (req, res) => {
  const counter = appSvc.incrementCounter(parseInt(req.params.amount))
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// port = tcp socket
// adapter = express.js
// representation A => Adapter => representation B
// http byte stream => express.js => type Request
