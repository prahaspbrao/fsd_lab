// Import required modules
const fs = require('fs');          // For file handling
const readline = require('readline'); // For reading console input

// Create an interface to read from the standard input (keyboard)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Program 13: Read from Console & Write to File");

// 1. Prompt the user for input
rl.question('Please enter the text you want to save: ', (userInput) => {
    
    // 2. Write the input to a file named 'output.txt'
    // fs.writeFile(filename, data, callback)
    fs.writeFile('output.txt', userInput, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Success! Data has been written to output.txt');
        }
        
        // 3. Close the input stream
        rl.close();
    });
});