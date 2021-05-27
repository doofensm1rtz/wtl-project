const mongoose = require("mongoose");

const teacherExamSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  hall: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: () => {
      new Date();
    },
    required: true,
  },
  numberOfStudents: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TeacherExam", teacherExamSchema);
