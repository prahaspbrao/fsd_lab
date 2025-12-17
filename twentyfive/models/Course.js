import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  studentsEnrolled: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Course", courseSchema);
