// a function that takes a string of text and capitalises the initial letter of every word

function titleCase(text) {
   text = text.toLowerCase().split(' ');

    for (let i = 0; i < text.length; i++) {
      text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);   
   }
   return text.join(' ');
}

console.log(titleCase("kill me already"));