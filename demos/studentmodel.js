const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dept: { type: String, required: true },
  age: { type: Number },
  subjects: [String],
  address: {
    city: String,
    pincode: Number
  },
  joinedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Student", studentSchema);
