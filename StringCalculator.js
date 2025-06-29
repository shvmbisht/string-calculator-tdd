module.exports = {
  add(numbers) {
    if (numbers === '') return 0;
    let delimiter = /,|\n/;
    let nums = numbers;
    if (numbers.startsWith('//')) {
      const match = numbers.match(/^\/\/(.)\n(.*)$/s);
      if (match) {
        delimiter = new RegExp(match[1]);
        nums = match[2];
      }
    }
    const numList = nums.split(delimiter).map(n => parseInt(n, 10));
    const negatives = numList.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    return numList.reduce((sum, n) => sum + n, 0);
  },
}; 