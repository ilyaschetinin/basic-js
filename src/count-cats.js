module.exports = function countCats(matrix) {

  let catsCount = 0;

  matrix.forEach(row => {
    row.forEach(cell => {
      if (cell === '^^') {
        catsCount++;
      }
    })
  })

  return catsCount;
};