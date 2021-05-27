const express = require("express");
const moment = require("moment");
const router = express.Router();
const TeacherExam = require("../../models/TeacherExam");
const Teacher = require("../../models/Teacher");
const data = require("../../data/TeacherData");

router.get("/", async (req, res) => {
  let teachExam, teacher;

  try {
    await TeacherExam.deleteMany({});
    await TeacherExam.insertMany(data.teacherExam);
    await Teacher.deleteMany({});
    await Teacher.insertMany(data.teacherList);

    teachExam = await TeacherExam.find({}).lean();
    teacher = await Teacher.findOne({ username: "C12" }).exec();

    res.render("teacher_home", { teachExam, teacher, moment });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
