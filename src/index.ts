import express from 'express'
import cors from 'cors'
import chack from 'chalk'

import router from './routes/route.js';

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

const port = 5000

app.listen(5000, ()=>{console.log(chack.yellow(`Server run in port ${port}`))})