import express from 'express'
import { logger } from './logger.js'

const port = process.env.PORT || 3000
const app = express()

app.get('/', (request, response) => {
    return response.send('Hello World!')
})

app.listen(port, () => logger.info(`server is running at 3000`))