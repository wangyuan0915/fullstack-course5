var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5Filter(value) {
	// body...
	return value > 5;
}




var filteredNumberArray = numberArray.filter(above5Filter);
console.log("Filted number array: ", filteredNumberArray);


var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

console.log("Shopping List: ", shoppingList);

var searchValue = "Bismol";