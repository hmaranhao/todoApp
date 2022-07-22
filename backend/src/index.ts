import { AppDataSource } from "./data-source"
import express from 'express'

const app = express()

AppDataSource.initialize().then(async () => {
    console.log("Here you can setup and run express / fastify / any other framework.")
    app.listen(5000, () => {
        console.log('Server is running on port', 5000)
    })

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
}).catch(error => console.log(error))
