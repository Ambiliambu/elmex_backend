const Admin=require('../models/adminModel')
const bcrypt=require('bcryptjs')


// admin register
const adminRegister=async(req,res)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password  ){
        res.status(400).json('Please add all field')    
    }
      
      //hash password
      const salt=await bcrypt.genSalt(10)
      const hashedPassword=await bcrypt.hash(password,salt)
  
       //create admin
       try {
        
        const admin=await Admin.create({
            name,
            email,
            password:hashedPassword,
           
        })
        res.status(201).json(admin)

       } catch (error) {
        res.status(400).json(error.message)
        
       }

}

// admin authetication

const adminAuthetication =async(req,res)=>{
    const {email,password}=req.body
    
    //check admin email
    const admin=await Admin.findOne({email})

    if(admin && (await bcrypt.compare(password,admin.password))){
        res.status(200).json(admin)

    }else{
        res.status(400).json('Authentication failed')
     
    } 
}
module.exports={
    adminRegister,
    adminAuthetication
}