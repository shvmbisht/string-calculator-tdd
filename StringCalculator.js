module.exports = {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    const nums = numbers.replace(/\n/g, ',');
    return nums.split(',').reduce((sum, n) => sum + parseInt(n, 10), 0);
  },
}; 