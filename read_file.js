const readline = require('readline');
const fs = require('fs');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("filename: ", file => {
    input.close();
    fs.readFile(file, (error, data) => {
        if (error !== null) {
            console.log(error.message);
        } else {
            console.log(data.toString());
        }
    });
});