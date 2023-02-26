
const {Employee}=require('../models/employeeModel')


// add employee
const addEmployee=async(req,res)=>{

    const {name,designation,email,phone,address,experiences,qualifications,skills,hobbies}=req.body
    if(!name || !email || !designation || !phone || !address || !experiences || !qualifications ||!skills || !hobbies  ){
        res.status(400).json('Please add all field')    
    }
  
  //create employee
  try {
        
    const employee=await Employee.create({
        name,
        email,
        designation,
        phone:parseInt(phone),
        address,
        experiences,
        qualifications,
        skills,
        hobbies
         
    })
    console.log(employee);
    res.status(201).json(employee)

   } catch (error) {
    res.status(400).json(error.message)
   }
}

// get all employees

const getEmployeesDatas=async(req,res)=>{
    try {
        const employees=await Employee.find({},{name:1,email:1,phone:1,address:1,designation:1})
        res.status(200).json(employees)
        
    } catch (error) {
        res.satus(400).json(error.message)
    }
}
//get one employee's all data
const getEmployeeAllDatas=async(req,res)=>{
    try {
        console.log(req.params);
        const employee=await Employee.findById(req.params.Id)
        res.status(200).json(employee)
        
    } catch (error) {
        res.satus(400).json(error.message)
    }
}

module.exports={
    addEmployee,
    getEmployeeAllDatas,
    getEmployeesDatas
}
