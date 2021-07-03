for (let index = 1; index <= 100; index++) {
  var output = "";
  if (index % 3 == 0) {
    output += "fizz";
  }
  if (index % 5 == 0) {
    output += "buzz";
  }
  console.log(output || index);
}

function fizzbuzz(n) {
  for (let index = 1; index <= n; index++) {
    console.log(output || index);
  }
}

fizzbuzz(100);
