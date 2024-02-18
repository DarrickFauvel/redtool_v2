const express = require("express")
const app = express()
const port = 5000

const { produce } = require("./data.js")

app.get("/api/produce", (req, res) => {
  res.json(produce)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
