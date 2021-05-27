const express = require("express");
const router = express.Router();
const Admin = require("../../models/Admin");
const TeacherExam = require("../../models/TeacherExam");
const Teacher = require("../../models/Teacher");
const Student = require("../../models/Student");
const StudentExam = require("../../models/StudentExam");
const studentData = require("../../data/StudentData");
const teacherData = require("../../data/TeacherData");
const moment = require("moment");

router.get("/", async (req, res) => {
  let teachExam, teacher, student;

  try {
    await TeacherExam.deleteMany({});
    await TeacherExam.insertMany(teacherData.teacherExam);
    await Teacher.deleteMany({});
    await Teacher.insertMany(teacherData.teacherList);
    await StudentExam.deleteMany({});
    await Student.deleteMany({});
    await StudentExam.insertMany(studentData.studentExam);
    await Student.insertMany(studentData.studentList);

    teachExam = await TeacherExam.find({}).lean();
    teacher = await Teacher.find({}).lean();
    student = await Student.find({}).lean();

    res.render("admin_home", { teachExam, teacher, student, moment });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
