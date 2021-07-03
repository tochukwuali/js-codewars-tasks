//get the sum of the ids of all the officers

var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
//puts the ids in an array
let officersId = []; 
  for (let i = 0; i < officers.length; i++) {
    officersId.push(officers[i].id);
  }

//computes the sum of the numbers in the array
let sumId = 0;
  for (let i = 0; i < officersId.length; i++) {
          sumId += officersId[i];
  }
console.log(sumId);

  //Using map() and reduce()

  var officersIds = 
    officers.map(function(officers){
        return officers.id}).reduce(function(a,b){return a + b})
console.log(officersIds)

// ES6 

 console.log(officers.map(officer => officer.id).reduce((a,b) => a + b))