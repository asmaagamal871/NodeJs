const CoursesModel = require("../Models/CoursesModels");

var GetAllCourses = async (req, res) => {
  var Courses = await CoursesModel.find();
  await res.json(Courses);
};

var AddNewCourse = async (req, res) => {
  var newCourseFromBody = req.body;
  var newCourseModel = new CoursesModel(newCourseFromBody);
  await newCourseModel.save();
  await res.json(newCourseModel);
};


var DeleteCourseByID = async (req, res) => {
  await CoursesModel.findByIdAndDelete(req.params.id);
  await res.json("Deleted successfully");
};

module.exports = {
  GetAllCourses,
  AddNewCourse,
  DeleteCourseByID,
};