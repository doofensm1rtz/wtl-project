const express = require("express");
const router = express.Router();
const Student = require("../../models/Student");
const StudentExam = require("../../models/StudentExam");

router.post("/", async (req, res) => {
  res.send({ number: 1 });
});

module.exports = router;
