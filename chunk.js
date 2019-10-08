// Array chunking
// Split an array into chunked arrays of a specified length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]

const chunkArray = (arr, len) => {
  const chunkedArr = [];

  arr.forEach(val =>{
    const last = chunkedArr[chunkedArr.length - 1];
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

module.exports = chunkArray;
