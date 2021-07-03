function isPangram(str) {
  var regex = /([a-z])(?!.*\1)/gi;
  return (str.match(regex) || []).length === 26;
}

console.log(isPangram("This is isn't a pangram"));
