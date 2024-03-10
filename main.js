import express from 'express'
import mongoose from 'mongoose'
import { DummyEmp } from './models/Dummy.js'

const app = express()
const port = 9000

app.use(express.static("public"))
app.use(express.json());

const db = await mongoose.connect('mongodb://localhost:27017/DummyEmp')


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

app.post('/', async (req, res) => {
    await DummyEmp.deleteMany({})

    const data = req.body
    data.forEach(async (it) => {
        const pushItem = new DummyEmp({
            name: it.name,
            salary: it.salary,
            language: it.language,
            city: it.city,
            isManager: it.isManager
        })

        await pushItem.save()
    })

    res.send({ "message": "Received Successfully" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})