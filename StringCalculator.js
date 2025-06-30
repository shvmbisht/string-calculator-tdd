module.exports = {
  add(numbers) {
    if (numbers === '') return 0;

    let delimiter = /,|\n/;
    let nums = numbers;

    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      const delimiterPart = parts[0];
      delimiter = delimiterPart.substring(2);
      nums = parts[1];
    }

    return nums.split(delimiter).reduce((sum, n) => sum + parseInt(n, 10), 0);
  },
}; 