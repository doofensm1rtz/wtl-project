const mongoose = require("mongoose");

const studentExamSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("StudentExam", studentExamSchema);
