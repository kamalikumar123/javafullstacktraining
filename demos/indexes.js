const express = require("express");
const mongoose = require("mongoose");
const Student = require("./student.model"); 

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// API to insert student
app.post("/student", async (req, res) => {
    const s = new Student(req.body);
    await s.save();
    res.send("Student Inserted!");
});

// API to view all students
app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

app.listen(3005, () => console.log("Server running on 3005"));
