const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Mongodb connection
mongoose.connect("mongodb://localhost/wtlProject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Setting views as ejs
app.set("view engine", "ejs");

// Serving css and images from public folder
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

// Individual routes
app.use("/student", require("./routes/student/home"));
app.use("/teacher", require("./routes/teacher/home"));
app.use("/admin", require("./routes/admin/home"));
app.use("/login", require("./routes/login/login"));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Server port number
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening on PORT: ${PORT}`));
