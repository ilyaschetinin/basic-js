// module.exports = function repeater(str, {
//   repeatTimes = 1,
//   separator = '+',
//   addition,
//   additionRepeatTimes = 1,
//   additionSeparator = '|'
// }) {
//   let result = '';
//   for (let i = 0; i < repeatTimes; i++) {
//     result += str;

//     if (addition !== undefined) {
//       for (let j = 0; j < additionRepeatTimes; j++) {
//         result += addition;
//         if (j < additionRepeatTimes - 1 && additionSeparator) {
//           result += additionSeparator;
//         }
//       }
//     }

//     if (i < repeatTimes - 1 && separator) {
//       result += separator;
//     }
//   }
//   return result;
// };


module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition,
  additionRepeatTimes = 1,
  additionSeparator = '|'
}) {
  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    result += str;

    if (addition !== undefined) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        result += addition;
        if (j < additionRepeatTimes - 1 && additionSeparator) {
          result += additionSeparator;
        }
      }
    }

    if (i < repeatTimes - 1 && separator) {
      result += separator;
    }
  }
  return result;
};
