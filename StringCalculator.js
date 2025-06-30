module.exports = {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    const parts = numbers.split(',');
    if (parts.length > 1) {
      return parts.reduce((sum, n) => sum + parseInt(n, 10), 0);
    }
    return parseInt(numbers, 10);
  },
}; 