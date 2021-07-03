//Some sort of Name validation
function someStuff(params) {
  var regex = /\D+\W+/;
  if (params.length >= 4 && params.length <= 25) {
    if (regex.test(params)) {
      return false;
    }
    return true;
  }
  return false;
}

function longestWord(sentence) {
  var result = sentence.split(" ");
  let max = result[0];
  for (let index = 1; index < result.length; index++) {
    const element = result[index];
    max = element.length > max.length ? element : max;
  }
  return max;
}

console.log(longestWord("123 love23456789012 Godiconiawe everyday"));
