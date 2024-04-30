function sortedFrequency(arr, num) {
  if (arr[arr.length - 1] === num) return 1;
  if (arr[0] === num) return 2;
  lowestIdx = 0;
  highestIdx = arr.length - 1;

  while (lowestIdx <= highestIdx) {
    let middleIdx = lowestIdx + Math.floor((highestIdx - lowestIdx) / 2);
    if (
      (middleIdx === num || arr[middleIdx - 1] !== num) &&
      arr[middleIdx] === num
    ) {
      return arr.length - 1 - middleIdx;
    } else if (arr[middleIdx] !== num) {
      lowestIdx = middleIdx + 1;
    } else {
      highestIdx = middleIdx - 1;
    }
  }
  return -1;
}

module.exports = sortedFrequency;
