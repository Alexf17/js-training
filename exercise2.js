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