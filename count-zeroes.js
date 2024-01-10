function countZeroes(arr) {
  lowestIdx = 0;
  highestIdx = arr.length - 1;

  while (lowestIdx <= highestIdx) {
    let middleIdx = lowestIdx + Math.floor((highestIdx - lowestIdx) / 2);
    if ((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0) {
      return arr.length - middleIdx;
    } else if (arr[middleIdx] === 1) {
      lowestIdx = middleIdx + 1;
    } else {
      highestIdx = middleIdx - 1;
    }
  }
  return 0;
}

module.exports = countZeroes;
