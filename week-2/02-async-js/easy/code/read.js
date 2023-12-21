const fs = require('fs');

// function to read and print content of the file
function readFileAndPrint(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if(err){
            console.error(`Error reading file: ${err.message}`);
        }
        else{
            console.log(`File content is : ${data}`);
            simulateExpensiveOperation();
        }
    });
}


function simulateExpensiveOperation() {
    console.log('Starting expensive operation...');
    const iterations = 100000000;
    for (let i = 0; i < iterations; i++) {
    }
    console.log('Expensive operation completed.');
}

const filename = 'read.txt';
readFileAndPrint(filename);