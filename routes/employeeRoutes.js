const express=require('express')
const { addEmployee, getEmployeesDatas, getEmployeeAllDatas } = require('../controllers/employeeControllers')
const router=express.Router()

router.post('/addemployee',addEmployee)
router.get('/getemployees',getEmployeesDatas)
router.get('/getemployeeall/:Id',getEmployeeAllDatas)




module.exports=router