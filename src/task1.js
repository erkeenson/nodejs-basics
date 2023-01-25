const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

try {
    rl.on('line', (line) => {
        console.log(line.split('').reverse().join(''));
    });
} catch (error) {
    console.log(error)
}

