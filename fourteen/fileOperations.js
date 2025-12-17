const fs = require('fs');

/* 1. Create a custom module with functions to read, write, and append.
   We use 'Sync' methods (writeFileSync, etc.) for simplicity in this demo,
   but asynchronous methods are also common in Node.js.
*/

// Function to Write Data (Overwrites file)
const writeFile = (fileName, data) => {
    try {
        fs.writeFileSync(fileName, data, 'utf8');
        console.log(`Success: Data written to ${fileName}`);
    } catch (err) {
        console.error("Error writing file:", err);
    }
};

// Function to Append Data (Adds to end of file)
const appendFile = (fileName, data) => {
    try {
        fs.appendFileSync(fileName, data, 'utf8');
        console.log(`Success: Data appended to ${fileName}`);
    } catch (err) {
        console.error("Error appending file:", err);
    }
};

// Function to Read Data
const readFile = (fileName) => {
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        console.log(`\n--- Content of ${fileName} ---`);
        console.log(data);
        console.log("-----------------------------\n");
    } catch (err) {
        console.error("Error reading file:", err);
    }
};

// Export the functions to make them accessible to other files
module.exports = {
    writeFile,
    appendFile,
    readFile
};