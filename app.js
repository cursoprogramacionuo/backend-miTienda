const express = require('express')
const database = require("./database")

const routerItems = require("./routers/routerItems")
const routerOrders = require("./routers/routerOrders")

const app = express()
app.use("/items",routerItems)
app.use("/orders",routerOrders)

const port = 3000



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})