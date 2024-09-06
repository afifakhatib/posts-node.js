const cl = console.log

// const http = require('http');
const express = require('express') // instance of express 
const app = express();
const parser = require('body-parser');
const bodyParser = require('body-parser');
//localhost:3000
const port = process.env.port || 3000
const postRoutes = require('./router/posts-router')
const cors = require('cors');
app.use(cors());

app.listen(port , () => {
    cl(`this server is running on port ${port}`)
})


app.use(bodyParser.json())
app.use(postRoutes)


// const server = http.createServer((req,res) => { // a fun calls as a paramter is a callback function 
//     res.end(`this is our first response of node server`)
// })

//here , http module is a default module  , but we dont use this http module ...
// we use server of EXPRESS . It is also a libaray / farmework 
//tranfrom meduim we only user end json type of data 
//middleware module : 1] body parser

// server.listen(3000 , () => {
//        cl(`Server is running on port 3000`)
// })

//here basically developer run server on 3000 port 
//node give you backend server  , Restfull API 
//backend API's has different end points for different api calling methods
// for example : /posts , /todos , /photos , etc 
// methos : get , post , patch/put , delete...

// dev.env 
// DATABASE_URL 
// DEBUG TRUE

//qa.env 
// DATA_URL
// NODE_ENV === TEST
