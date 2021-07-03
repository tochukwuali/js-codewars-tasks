function square(n) {
  var result = n * n;
  return result;
}

const squareTable = (v) => {
  for (let index = 1; index < v; index++) {
    console.log(square(index));
  }
};

squareTable(10);
