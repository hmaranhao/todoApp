import "reflect-metadata"
import "./cross-cutting"

import { AppDataSource } from "./data-source"
import express from 'express'
import cors from 'cors'

import { routes } from "./routes"

const app = express()

AppDataSource.initialize().then(async () => {
    console.log("Here you can setup and run express / fastify / any other framework.")
    app.use(cors())
    app.use(express.json())
    
    app.use(routes)

    app.listen(process.env.PORT || 5000, () => {
        console.log('Server is running on port', 5000)
    })
}).catch(error => console.log(error))
