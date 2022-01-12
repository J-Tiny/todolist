import { Express } from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import task from './src/routes/tasks'
const app = (app: Express) => {
  app.use(json())
  app.use(urlencoded({ extended: true }))
  app.use(
    cors({
      origin: process.env.CORS || '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  )

  app.get('/', (req, res) => {
    res.send('Welcome to application.')
  })

  app.use('/tasks',task)
}

export default app
