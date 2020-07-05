module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const result = [];
  // let discardNext = false;

  // arr.reduce((previousValue, currentValue, currentIndex, originalArray) => {

  //   if (discardNext) {
  //     discardNext = false;
  //     return undefined;
  //   }
  //   else {
  //     switch (currentValue) {
  //       case '--discard-next':
  //         discardNext = true;
  //         break;
  //       case '--double-next':
  //         let nextIndex = currentIndex + 1;
  //         let nextValue = originalArray[nextIndex];
  //         if (nextValue !== undefined) {
  //           result.push(nextValue);
  //         }
  //         break;
  //       case '--double-prev':
  //         if (previousValue !== undefined) {
  //           result.push(previousValue);
  //         }
  //         break;
  //       case '--discard-prev':
  //         if (previousValue !== undefined) {
  //           result.pop();
  //         }
  //         break;
  //       default:
  //         result.push(currentValue);
  //         break;
  //     }
  //   }

  //   return currentValue;
  // }, undefined);

  arr.reduce((previousValue, currentValue, currentIndex, originalArray) => {

    switch (previousValue) {
      case '--discard-next':
        return undefined;
      case '--double-next':
        result.push(currentValue);
        break;
    }

    switch (currentValue) {
      case '--discard-next':
      case '--double-next':
        return currentValue;
      case '--double-prev':
        if (previousValue !== undefined) {
          result.push(previousValue);
        }
        break;
      case '--discard-prev':
        if (previousValue !== undefined) {
          result.pop();
        }
        break;
      default:
        result.push(currentValue);
        break;
    }

    return currentValue;
  }, undefined);

  return result;
};
