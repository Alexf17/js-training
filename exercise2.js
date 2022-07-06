// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!"
//   }
// return "The order is accepted, our manager will contact you";

// }
// checkStorage(100, 130)


// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function getExtremeElements(array) {
//   // let first = array[0]

//   // let second = array.length-1

//   // let result = [first, second]

//   let second = array.pop()

//   return second
// }

// console.log(getExtremeElements)

// getExtremeElements([1, 2, 3, 4, 5])

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// words = message.split(delimeter)
//   // Change code above this line
//   return words;

// }
// console.log(words)
// splitMessage("Mango hurries to the train", " ")

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   let messageIndex = Number(message.split(" ").length)

// let summ = (messageIndex * pricePerWord)
// console.log(summ)
// return summ.
//    // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10)

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function slugify(title) {
//   // Change code below this line
// let slug = ""
// slug = title.toLowerCase().replaceAll(" ", "-")

// return slug
//   // Change code above this line
// }

// slugify("Arrays for begginers")
// slugify("English for developer")

// function slugify(title) {
//   // Change code below this line
// let slug = ""

// slug = title.toLowerCase().split(" ").join("-")

// return slug
//   // Change code above this line
// }

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function findLongestWord(string) {
//   let splitString = string.split(" ")
//   let mostLong = []
//   for (let i = 0; i < splitString.length; i += 1) {
//     if (splitString[i].length > mostLong.length) {
//       mostLong = splitString[i]

//     }

//   }

// console.log(mostLong)
// }

// findLongestWord("The quick brown fox jumped over the lazy dog")

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//   numbers.push(i)

// }
//   // Change code above this line
//   console.log(numbers);
// }
// createArrayOfNumbers(14, 17)

// function filterArray(numbers, value) {
//    // Change code below this line
//   const numb = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) numb.push(numbers[i])
//       // numb.push(numbers[i])

//  }
// console.log(numb)
// }
// filterArray([12, 24, 8, 41, 76], 20)

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArr = []
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) newArr.push(array1[i])
//     }

//     console.log(newArr)
//   }
// getCommonElements([1, 2, 3], [2, 4])

// function getEvenNumbers(start, end) {

//   let evenNumbers = []
//   for (let i = start; i <= end; i += 1) {

//   if (i % 2 === 0) evenNumbers.push(i)
// }
// console.log(evenNumbers)
// }
// getEvenNumbers(2, 5)

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
// }
// findNumber(2, 6, 5)

// function includes(array, value) {
//   // Change code below this line
// for (element of array) {
//     if (element === value) {
//     return true
//   }

// }
// return false
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3)
// includes(["apple", "plum", "pear", "orange"], "kiwi")

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   // console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for ( key in apartment) {
//   if (Object.hasOwnProperty.call(apartment, key)) {
//     values.push(apartment[key])
//     keys.push(key)
//   }
// }
// console.log(keys, values)

// function countProps(object) {
//     let propCount = 0;
//    for (let key in object) {
//      let nums = object.hasOwnProperty(key);
//      console.log(nums) ;
//    }
//  }
//  countProps({ name: "Mango", age: 2 })

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
// for (const key of Object.values(salaries)) {
//     totalSalary +=key
// }
//   // Change code above this line
//   console.log(totalSalary) ;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   // Change code below this line
//     for (product of products) {
//         if (productName === product.name) {
//            console.log(product.price)
//        }
//     }
//     console.log(null)
// }
// getProductPrice("Radr")

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   // console.log(firstNumber); // Значение первого аргумента
//   // console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     for (product of products) {
//     console.log([product[propName]])
// }


//   // Change code above this line
// }
// getAllPropValues("nam")

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);