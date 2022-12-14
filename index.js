// required packages
require('dotenv').config()
require('./models')
const express = require('express')
const cors = require('cors')

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

// app config/middleware
const app = express()
const PORT = process.env.PORT || 8000
app.use(cors(corsOptions))
app.use(express.json()) // json req.bodies

// simple middleware
// app.use((req, res, next) => {
//   console.log('hello i am a middleware')
//   res.locals.myData = 'i am data that is passed out of the middleware'
//   // tell express to move on to the next thing
//   next()
// })

const myMiddleware = (req, res, next) => {
  console.log('hello i am a middleware')
  res.locals.myData = 'i am data that is passed out of the middleware'
  // tell express to move on to the next thing
  next()
}

// routes and controllers
app.get('/', myMiddleware, (req, res) => {
  res.json({ msg: 'Welcome back beech!' })
  console.log(res.locals.myData)
})

app.use('/users', require('./controllers/users'))
app.use('/characters', require('./controllers/characters'))
// listen on a port
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})
