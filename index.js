import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Get the S value
const s = await rl.question('Please input S:');

// Get N value, exit if not int
const n = await rl.question('Please input N:');
if (isNaN(n)) {
    console.log('Please input number only');
    process.exit();
}

// Get C value
const c = await rl.question('Please input C:');

// Initiate initial value
let splittedS = s.split('');
let finalString = '';
let occurence = 0;

// Loop splitted str
for (let i = 0; i < n; i++) {
    // Get string index by modulus,
    let currentStr = splittedS[i % splittedS.length];

    // occurence counter
    if (currentStr == c) {
        occurence++;
    }

    // final string generator
    finalString += currentStr;
}

// Outputs
console.log('S: ' + s);
console.log('N: ' + n);
console.log('C: ' + c);
console.log('Final String: ' + finalString);
console.log('\n');
console.log('Result: ' + occurence + ' occurence');

rl.close();