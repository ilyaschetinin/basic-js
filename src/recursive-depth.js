module.exports = class DepthCalculator {
  calculateDepth(arr, currentDepth = 1) {

    let biggestDepth = currentDepth;
    let arrays = arr.filter(a => Array.isArray(a));
    for (const array of arrays) {
      let arrayDepth = this.calculateDepth(array, currentDepth + 1);
      if (arrayDepth > biggestDepth) {
        biggestDepth = arrayDepth;
      }
    }
    return biggestDepth;
  }
};