const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

Admin.create({ username: "admin", password: "123" });

module.exports = Admin;
