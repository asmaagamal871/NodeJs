const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const login = require("./Middlewares/logging");
const StudentsRoutes = require("./Routes/StudentsRoutes");
const CoursesRoutes = require("./Routes/CoursesRoutes");
const UsersRoutes = require("./Routes/UsersRoutes");


const port = process.eventNames.PORT || 7005;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(login);
app.use("/api/students", StudentsRoutes);
app.use("/api/courses", CoursesRoutes);
app.use("/api/users", UsersRoutes);


app.listen(port, () => {
  console.log("https://localhost:" + port);
});