// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//  order (pizzaName, onSuccess, onError) {
//       if (this.pizzas.includes(pizzaName)) {
          
//           return onSuccess(pizzaName)
//       }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// // console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// // pizzaPalace.order('Big Mike', makePizza, onOrderError);
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError))

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//     orderedItems.forEach(function (number) {
//     totalPrice += number
//   })
//   // Change code above this line
//   console.log(totalPrice) ;
// }
// calculateTotalPrice([12, 85, 37, 4])

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = []

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//     newArray.push(element + value)
//   } if (element % 2 !== 0) {
//     newArray.push(element)
//   }
//   }
//   )
//   return newArray
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10))

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
},0 );

console.log(total); // 32