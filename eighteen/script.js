// 1. Create (switch to) Database 'CollegeDB' and Create 'students' collection
use CollegeDB;
db.createCollection("students");

// 2. Insert three documents into 'students' collection
db.students.insertMany([
    { name: "Arjun", age: 20, sem: 5, usn: "1CR19CS001", grade: "A" },
    { name: "Sneha", age: 17, sem: 3, usn: "1CR20CS045", grade: "B" },
    { name: "Rahul", age: 22, sem: 7, usn: "1CR18CS102", grade: "A" }
]);

// 3. Insert multiple documents into 'courses' collection
// (Note: The collection 'courses' is created automatically here)
db.courses.insertMany([
    { courseName: "Full Stack", courseCode: "20CS51", credits: 4 },
    { courseName: "Networking", courseCode: "20CS52", credits: 3 },
    { courseName: "English",    courseCode: "20ENG18", credits: 1 }
]);

// --- OPERATIONS & QUERIES ---

print("\n--- 4. All Students ---");
db.students.find().pretty();

print("\n--- 5. Students with Age > 18 ---");
db.students.find({ age: { $gt: 18 } }).pretty();

print("\n--- 6. Students with Grade 'A' ---");
db.students.find({ grade: "A" }).pretty();

print("\n--- 7. Courses with Credits >= 3 ---");
db.courses.find({ credits: { $gte: 3 } }).pretty();