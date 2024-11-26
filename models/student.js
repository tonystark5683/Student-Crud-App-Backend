const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    address:String,
    password:String,
})

const Student = mongoose.model('students',studentSchema);

module.exports=Student;