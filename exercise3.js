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

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// },0 );

// console.log(total); // 32


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// const getTotalBalanceByGender = (users, gender) => [...users]
//   .filter(friend => friend.gender === gender)
//   .reduce((acc, namber) => acc + namber.balance , 0)
// console.log(getTotalBalanceByGender(users, "female"))

// const getSortedFriends = [...users]
//   .flatMap(name => name.friends)
//   .filter((names, index, array) => array.indexOf(names) === index)
//   .sort((a, b) => a.localeCompare(b));
// console.log(getSortedFriends)

// const getNamesSortedByFriendCount = [...users].sort((a, b) => a.friends.length - b.friends.length).map(names => names.name)
// console.log(getNamesSortedByFriendCount)

// const getTotalFriendCount = users.flatMap((user) => user.friends).reduce((acc) => acc + 1 , 0)
// console.log(getTotalFriendCount)

// const getTotalFriendCount = users => users.reduce((acc, user) => acc + user.friends.length , 0)


// const getFriends = (users) =>
//   users.flatMap(user => user.friends)
//   .filter((user, index, array) => array.indexOf(user) === index)
// console.log(getFriends(users))

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName))
//   console.log(getUsersWithFriend(users,"Briana Decker"))

// const getActiveUsers = (users) => users.filter(user => user.isActive)
// console.log(getActiveUsers(users))

// const getInactiveUsers = (users) => users.filter(user => !user.isActive)
// console.log(getActiveUsers(users))

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line
// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => acc + player.playtime / player.gamesPlayed ,0);
// console.log(totalAveragePlaytimePerGame)

//  const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// const names = [...books]
//   .filter(name => name.rating >= MIN_BOOK_RATING)
//   .map(auttors => auttors.author).sort((a, b) => a.localeCompare(b))
// console.log(names)

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//     // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// function checkObj(obj, checkProp) {
//   // Змініть код лише під цим рядком
//   return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found"
//   // Змініть код лише над цим рядком
// }
// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))


// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// const secondTree = myPlants[0].list[1];
// console.log(secondTree)


// class Storage {
//     constructor (item) {
//         this.item = item
//     }
//     getItems() {
//         this.item
//     }
//     addItem(newItem) {
//         this.item.push(newItem)
//     }
//     removeItem(itemToRemove) {
//         this.item = this.item.filter(element => element != itemToRemove)
//     }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class Car {
//     constructor(name, model) {
//         this._model = model
//         this.name = name
//     }
//     get model() {
//         return this._model
//     }
//     set model(newMod) {
//         this._model = newMod
//     }
// }
// const car2 = new Car('anna', 32)
// console.log(car2)
// console.log(car2.model = 21)
// console.log(car2)


// class StringBuilder {
//     constructor (initialValue) {
//         this.value = initialValue
//     }
//     getValue () {
//         return this.value
//     }
//     padEnd (str) {
//         this.value = `${this.value}${str}` 
//     }
//     padStart (str) {
//         this.value = `${str}${this.value}`
//     }
//     padBoth (str) {
//         this.value = `${str}${this.value}${str}`
//     }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
