const dns = require('dns');
const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Domain Name: ", (domain) => {
    dns.lookup(domain, (error, address) => {
        if (error !== null) {
            console.log(error);
        }
        console.log(`IP Address: ${address}`);
    });
    input.close();
});