const Student = require("./../models/student");
async function addStudent(studentModel) {
  //to do
  let student = new Student({
    ...studentModel,
  });
  await student.save();
  return student.toObject(); // to return as a plain js object
}

async function getStudent() {
    const student= await Student.find();
    return student.map(ele=>ele.toObject());
    
}
async function getStudentById(id) {
    const student= await Student.findById(id);
    return student.toObject();
    
}

async function updateStudent(id,studentModel){
    const filter = {_id:id};
    await Student.findOneAndUpdate(filter,studentModel);
}

async function deleteStudent(id){
    await Student.findByIdAndDelete(id);
}

module.exports = { addStudent,getStudent,getStudentById,updateStudent,deleteStudent};
