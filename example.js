const StringCalculator = require('./StringCalculator');

const input = process.argv[2];

if (input === undefined) {
  console.log('Please provide a string of numbers to add.');
  console.log('Example: node example.js "1,2,3"');
  process.exit(1);
}

try {
  const processedInput = input.replace(/\\n/g, '\n');
  const result = StringCalculator.add(processedInput);
  console.log(`Input: "${input}"`);
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(error.message);
} 