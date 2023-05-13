import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()
//using cors
app.use(cors())

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes   
import userRoutes from './app/modules/user/user.route'

// app.get('/api/v1/user', userRoutes)
app.use('/api/v1/users', userRoutes)


export default app