/**
* Given this array of different fruits and vegetables called "food"
*/
var food = [{name: 'tomato', type: 'fruit'},
            {name: 'apple', type:'fruit'},
            {name: 'banana', type:'fruit'},
            {name: 'orange', type:'fruit'},
            {name: 'peach', type:'fruit'},
            {name: 'cucumber', type:'vegetable'},
            {name: 'lettuce', type:'vegetable'},
            {name: 'carrot', type:'vegetable'},
            {name: 'beet', type:'vegetable'},
            {name: 'onion', type:'vegetable'},
          ];
console.log(food);

/**
* 1. return an array of only the names of the foods
* use pluck
* remember to print your result to the console (hint: you can use the value function)!
*/
var names = Lazy(food)
  .pluck('name')
  .value();
console.log(names);

/**
* 2. return an array of foods with the type fruit
* use filter
* remember to print your result to the console!
*/
var vegs = Lazy(food)
  .filter(function(item) { return item.type === 'fruit' })
  .value();
console.log(vegs);

/**
* 3. return an array of foods that change the type of vegetables from "vegetable" to "gross"
* use map
* remember to print your result to the console!
*/
var gross = Lazy(food)
  .map(function(item) {
    if(item.type === 'vegetable') {
      return {'name': item.name, 'type': item.type = 'gross'};
    }
    else {
      return {'name': item.name, 'type': item.type};
    }
  })
  .value();
console.log(gross);

/**
* 4. return an array of foods that change the type of all foods to "produce",
* practice chaining and only take the first two elements
* use map, take
* remember to print your result to the console!
*/
var produce = Lazy(food)
  .map(function(item) { return {'name': item.name, 'type': item.type = 'produce'}; })
  .take(2)
  .value();
console.log(produce);




/**
* BONUS: use the generate function to generate an indefinite list of random numbers
* only return unique numbers
* print to the console using the each function
*/
Lazy.generate(Math.random)
  .map(function(e) { return Math.floor(e * 1000) + 1; })
  .uniq()
  .each(function(e) { console.log(e); });
