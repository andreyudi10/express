const express = require('express')
const cors = require('express')

const app = express()

app.get('/api', cors(), (req,res) => {
    const dataApi = [
        "contohnya string ini"
    ]

    res.json(dataApi)
})

app.get('/api/lainnya', cors(), (req,res) => {
    const dataApi = [
        {nama:"andri",rumah:"yogyakarta"},
        {nama:"yudi",rumah:"semarang"},
        {nama:"pratomo",rumah:"surakarta"},
    ]

    res.json(dataApi)
})

app.get('/menggunakan-dash', cors(), (req, res) => {
    const dataApi = [
        "ini api menggunakan dash"
    ]

    res.json(dataApi)
})

const port = 5000;
app.listen( port, () => {
    console.log(`runnin in ${port}`)
} )