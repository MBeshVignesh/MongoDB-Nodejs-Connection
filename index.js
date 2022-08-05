const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const url = 'mongodb://localhost/mydb';
const PORT = 8080
const app = express()
  

mongoose.Promise = global.Promise
mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true})
const conn = mongoose.connection

conn.on('open',()=>{
    console.log('Database connected...')
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) 

const Router = require('./src/routes/Routes')
app.use('/',Router)

const Authroute = require('./src/routes/Authroute')
app.use('/',Authroute)

app.listen(PORT,()=>{
    console.log(`The server is connected on PORT:${PORT}`)
})