import express from "express"
import config from "config"

const app = express()

//JSON middleware
app.use(express.json())

app.listen(3000, async () => {
    console.log("Aplicação está funcionando na porta: 3000")
})