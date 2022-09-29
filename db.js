const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.DB_URL,(err)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log("database is connected....")
})