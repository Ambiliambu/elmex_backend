const mongoose=require('mongoose')


const employeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
 
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    experiences:[{
        type:String,
        required:true
    }],
    qualifications:[{
        type:String,
        required:true
    }],
    skills:[{
        type:String,
        required:true
    }],
    hobbies:[{
        type:String,
        required:true
    }]

    
},{
    timestamps:true
})
const Employee=mongoose.model("Employee",employeeSchema)

module.exports={Employee}
