import express from "express";
import mongoose from "mongoose";
import Course from "./models/Course.js";

const app = express();
const PORT = 3000;

// Normal route
app.get("/" , (req , res)=>{
    
})

/* -------- Middleware -------- */
app.use(express.json());

/* -------- MongoDB Connection -------- */
mongoose
  .connect("mongodb://127.0.0.1:27017/courseDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

/* -------- Create Course -------- */
app.post("/courses", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

/* -------- Get All Courses -------- */
app.get("/courses", async (req, res) => {
  const courses = await Course.find();

  res.json({
    success: true,
    message: "Courses fetched successfully",
    data: courses,
  });
});

/* -------- Get Course by ID -------- */
app.get("/courses/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return res.status(404).json({
      success: false,
      message: "Course not found",
    });
  }

  res.json({
    success: true,
    message: "Course fetched successfully",
    data: course,
  });
});

/* -------- Update Course -------- */
app.put("/courses/:id", async (req, res) => {
  const course = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!course) {
    return res.status(404).json({
      success: false,
      message: "Course not found",
    });
  }

  res.json({
    success: true,
    message: "Course updated successfully",
    data: course,
  });
});

/* -------- Delete Course -------- */
app.delete("/courses/:id", async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);

  if (!course) {
    return res.status(404).json({
      success: false,
      message: "Course not found",
    });
  }

  res.json({
    success: true,
    message: "Course deleted successfully",
  });
});

/* -------- Total Students Route -------- */
app.get("/courses/totalStudents", async (req, res) => {
  const courses = await Course.find();

  const totalStudents = courses.reduce(
    (sum, course) => sum + course.studentsEnrolled,
    0
  );

  res.json({
    success: true,
    message: "Total students calculated successfully",
    totalStudents,
  });
});

/* -------- Invalid Route Handler -------- */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Invalid API endpoint",
  });
});

/* -------- Start Server -------- */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
