var StudentsArr = []; 
var id = 0;
class Students {
  constructor(name, age) {
    this.id = ++id; //
    this.name = name;
    this.age = age;
  }
  //Get All Students
  static GetAllStudents() {
    return StudentsArr;
  }
  //Add New Student
  saveStudent() {
    StudentsArr.push(this);
    return this;
  }
}

module.exports = Students;