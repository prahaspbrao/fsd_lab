/*
   2. Use the module in another file to demonstrate its functionality.
*/

// Import the custom module (note the './' for local files)
const fileOps = require('./fileOperations');

const targetFile = 'notes.txt';

console.log("--- Program 14: Custom Modules Demo ---\n");

// Step A: Write to the file
fileOps.writeFile(targetFile, "Hello! This is the first line of text.");

// Step B: Read the file to check content
fileOps.readFile(targetFile);

// Step C: Append new data to the file
fileOps.appendFile(targetFile, "\nThis is the second line, appended later.");

// Step D: Read again to verify the append
fileOps.readFile(targetFile);