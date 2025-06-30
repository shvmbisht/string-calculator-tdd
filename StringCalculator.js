module.exports = {
  add(numbers) {
    if (numbers === '') return 0;

    let delimiter = /,|\n/;
    let numsStr = numbers;

    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      const delimiterPart = parts[0];
      delimiter = delimiterPart.substring(2);
      numsStr = parts[1];
    }

    const numList = numsStr.split(delimiter).map(n => parseInt(n, 10));
    const negatives = numList.filter(n => n < 0);

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return numList.reduce((sum, n) => sum + n, 0);
  },
}; 