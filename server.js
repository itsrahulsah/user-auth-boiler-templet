const  express = require('express')
require('./db')

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to port 3000 </h>')
})
app.listen('3000',()=>{
    console.log('server running on port 3000')
})