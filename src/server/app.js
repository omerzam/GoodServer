import express from 'express'
import middlewares from './server-middlewares'
const app = express()
console.log("XXXXX")
app.use(express.static('public'))
middlewares(app, 'prod')

export default app
