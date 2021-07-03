let data = [
    {country: 'China', pop: 1409517397},
    {country: 'India', pop: 1339180127},
    {country: 'USA', pop: 324459463},
    {country: 'Indonesia', pop: 263991379}
  ];

let population = data.map(pops => pops.pop).reduce((a,b) => a + b);
console.log(population)