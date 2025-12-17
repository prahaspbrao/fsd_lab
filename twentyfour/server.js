import express from "express";

const app = express();
const PORT = 3000;

/* -------- Middleware to parse JSON -------- */
app.use(express.json());

/* -------- In-memory Teacher Data -------- */
let teachers = [];
let idCounter = 1;

// Normal route
app.get("/" , (req , res)=> {
    return res.status(200).json({
      success: true,
      message: "Normal route",
    });
})

/* -------- Create Teacher -------- */
app.post("/teachers", (req, res) => {
  const { name, department, experience, email } = req.body;

  if (!name || !department || !experience || !email) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const newTeacher = {
    id: idCounter++,
    name,
    department,
    experience,
    email,
  };

  teachers.push(newTeacher);

  res.status(201).json({
    success: true,
    message: "Teacher added successfully",
    data: newTeacher,
  });
});

/* -------- Fetch All Teachers -------- */
app.get("/teachers", (req, res) => {
  res.json({
    success: true,
    message: "Teacher records fetched successfully",
    data: teachers,
  });
});

/* -------- Fetch Teacher by ID -------- */
app.get("/teachers/:id", (req, res) => {
  const teacher = teachers.find(t => t.id == req.params.id);

  if (!teacher) {
    return res.status(404).json({
      success: false,
      message: "Teacher not found",
    });
  }

  res.json({
    success: true,
    message: "Teacher record fetched successfully",
    data: teacher,
  });
});

/* -------- Update Teacher -------- */
app.put("/teachers/:id", (req, res) => {
  const teacher = teachers.find(t => t.id == req.params.id);

  if (!teacher) {
    return res.status(404).json({
      success: false,
      message: "Teacher not found",
    });
  }

  const { name, department, experience, email } = req.body;

  teacher.name = name || teacher.name;
  teacher.department = department || teacher.department;
  teacher.experience = experience || teacher.experience;
  teacher.email = email || teacher.email;

  res.json({
    success: true,
    message: "Teacher updated successfully",
    data: teacher,
  });
});

/* -------- Delete Teacher -------- */
app.delete("/teachers/:id", (req, res) => {
  const index = teachers.findIndex(t => t.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Teacher not found",
    });
  }

  teachers.splice(index, 1);

  res.json({
    success: true,
    message: "Teacher deleted successfully",
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
