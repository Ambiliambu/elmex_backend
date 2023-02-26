const express=require('express')
const { adminRegister, adminAuthetication } = require('../controllers/adminControllers')
const router=express.Router()

router.post('/adminregister',adminRegister)
router.post('/adminlogin',adminAuthetication)

module.exports=router