// mongoose-demo.js

const mongoose = require("mongoose");

// 1. Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

// 2. Create Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

// 3. Create Model
const Student = mongoose.model("Student", studentSchema);

// 4. Insert Document
async function createStudent() {
  const s = new Student({
    name: "Kamali",
    age: 22,
    course: "Java Full Stack"
  });

  const result = await s.save();
  console.log("Inserted:", result);
}

createStudent();
