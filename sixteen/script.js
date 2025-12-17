// 1. Measuring execution time of code blocks
// console.time(label) starts the timer, console.timeEnd(label) stops it.
console.time("Execution Time"); 

// Simulating a task (e.g., a loop)
for (let i = 0; i < 1000000; i++) {
    // Doing nothing, just consuming time
}

// Stops the timer and prints the duration
console.timeEnd("Execution Time"); 


// 2. Grouping related log messages
// console.group() starts a block, console.groupEnd() closes it.
console.log("\n--- Grouping Example ---");
console.group("Server Details");
    console.log("IP: 192.168.1.1");
    console.log("Port: 8080");
    console.group("Status Check"); // Nested group
        console.log("Database: Connected");
        console.log("Cache: Clear");
    console.groupEnd();
console.groupEnd();


// 3. Using assertions
// console.assert(condition, message) logs the message ONLY if the condition is false.
console.log("\n--- Assertion Example ---");
const x = 5;
const y = 10;
// This will NOT log anything because x < y is true
console.assert(x < y, "Error: x should be less than y"); 
// This WILL log an error message because x > y is false
console.assert(x > y, "Assertion Failed: x is NOT greater than y");


// 4. Displaying data in a tabular format
// console.table() formats arrays or objects into a readable table.
console.log("\n--- Table Example ---");
const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A" }
];
console.table(students);


// 5. Logging debugging details
// Standard logging methods for analysis.
console.log("\n--- Logging Details ---");
console.log("Standard Log: System initialized.");
console.warn("Warning Log: Memory usage is high.");
console.error("Error Log: Connection failed.");