const express = require("express");
const router = express.Router();
const StudentExam = require("../../models/StudentExam");
const Student = require("../../models/Student");
const data = require("../../data/StudentData");

router.get("/", async (req, res) => {
  let studExam, student;

  try {
    await StudentExam.deleteMany({});
    await Student.deleteMany({});
    await StudentExam.insertMany(data.studentExam);
    await Student.insertMany(data.studentList);

    studExam = await StudentExam.find({}).lean();
    student = await Student.find({}).lean();

    res.render("student_home", { studExam, student });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
