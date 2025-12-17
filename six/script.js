/* Program 6: Array Methods (Map, Filter, Reduce)
   Requirements:
   1. Create student objects.
   2. Convert marks to CGPA using map().
   3. Display list of students with CGPA >= 9.
   4. Show total count using filter/reduce.
*/

// 1. Create an array of student objects
const students = [
    { name: "Alice", marks: 95 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 78 },
    { name: "Eve", marks: 88 },
    { name: "Frank", marks: 90 }
];

// 2. Convert marks to CGPA using map()
const studentsWithCGPA = students.map(student => {
    return {
        name: student.name,
        cgpa: student.marks / 10
    };
});

// 3. Get list of students with CGPA >= 9 using filter()
const highAchievers = studentsWithCGPA.filter(student => student.cgpa >= 9);

// 4. Get total count of students with CGPA >= 9 using reduce()
const countHighAchievers = highAchievers.reduce((count, student) => {
    return count + 1;
}, 0);

// --- DISPLAY OUTPUT (Text Format) ---

console.log("--- List of Students with CGPA >= 9 ---");
// Loop through the array to print simple text instead of objects
highAchievers.forEach(student => {
    console.log(`Name: ${student.name}, CGPA: ${student.cgpa}`);
});

console.log("\n--- Total Count ---");
console.log(`Total number of students with CGPA 9 or higher: ${countHighAchievers}`);