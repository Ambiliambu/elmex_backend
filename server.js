const express=require('express')
const dotenv=require('dotenv').config()
const path=require('path')
const port=process.env.PORT || 5000;
const connectDB=require('./config/db')
const app=express()
const cors = require('cors')

connectDB()



app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.get('/',(req,res)=>{
    res.setHeader('Access-Control-Allow-Credentials','true');
    res.send('Api running')
})


app.use('/',require('./routes/adminRoutes'))

app.use('/',require('./routes/employeeRoutes'))


// if(process.env.NODE_ENV ==='production'){
//     app.use(express.static('frontend/build'));
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
//     })
// }

app.listen(port,()=>console.log(`Server started on port ${port}`))
