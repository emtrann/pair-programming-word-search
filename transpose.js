const transpose = function(matrix) {
  // Put your solution here
  let newMax = [];
  for (let i = 0; i < matrix[0].length; i++) {
      newMax[i] = [];
  }
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          newMax[j][i] = matrix[i][j];
      }
  }
  return newMax;
};

module.exports = transpose;