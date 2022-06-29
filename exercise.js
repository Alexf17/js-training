// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//    if (available >= ordered) {
//       message = 'Order is processed, our manager will contact you.';
//     } else {
//       message = 'Not enough goods in stock!';
//     }
//     console.log (message)
//     // Change code above this line
//     return message;
//   }
//   checkStorage(100, 50)
//   checkStorage(100, 130)
//   checkStorage(200, 20)
//   checkStorage(200, 150)
//   checkStorage(150, 180)

// const max = 10;
// for (let i = 0; i <= max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

// function isNumberInRange(start, end, number) {
//   const isInRange = (number >= start && number <= end); // Change this line
// console.log (isInRange)
//   return isInRange;
// }
// isNumberInRange(10, 30, 17)
// isNumberInRange(10, 30, 5)
// isNumberInRange(20, 50, 24)
// isNumberInRange(20, 50, 76)

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line
// console.log (isNotInRange)
//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17)

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000) {
// discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000 || totalSpent < 50000) {
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 || totalSpent < 20000) {
//   discount = BRONZE_DISCOUNT;
// } else {
//   discount = BASE_DISCOUNT;
// }
//   // Change code above this line
//   return discount;

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   let price
// switch (country) {
//   case "China"  : price = 100 ;
//   message = "Shipping to (country) will cost $(price) credits"
// break

// case "Chile"  : price = 250
//   message = "Shipping to $(country) will cost $(price) credits"
// break
// case "Australia"  :
//   message = `"Shipping to $(country) will cost (price) credits"`
// break
// case "Jamaica"  : price = 120
//   message = "Shipping to $(country) will cost $(price) credits"
// break

// default :
// message = "Sorry, there is no delivery to your country"
// }
//   // Change code above this line

//   console.log (message)
//   return message;
// }
// getShippingCost("Australia")
// getShippingCost("China")
// getShippingCost("Sweden")

// function getNameLength(name) {
//   const message = `Name ${name} is ${name .length} characters long`; // Change this line
// console.log(message)
//   return message;
// }
// getNameLength("Poly")

// const productName = "Repair droid";
// console.log(productName[0]); // "R"
// console.log(productName[5]); // "r"
// console.log(productName[11]); // "d"
// console.log(productName[productName.length - 2]);

// function getSubstring(string, length) {
//   const substring = `${string.slice(0, length)}`; // Change this line
// console.log (substring)
//   return substring;
// }
// getSubstring("Hello world", 3)

// function formatMessage(message, maxLength) {
//   let result;
//   if (`${message.length}` > )

//   console.log (result)
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16)

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "11");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }

// const maxLength = "фыфвыфвыф"
// const lengthLong = 20
// let message

// if (maxLength.length > lengthLong) {
//   message = maxLength.slice(0,lengthLong) + "..."
// }
// else {
//   message = maxLength
// }
// console.log (message)



// Используя конструкцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const question = prompt("Какое официальное название JavaScript?")


// if (question === "ECMAScript" ) {
//   alert ("Верно!")
// } else {
//   alert("Не знаете? ECMAScript!")

// }

// console.log (question)

// function checkForName(fullName, name) {
//   const result = fullName.toLowerCase().includes(name.toLowerCase()); // Change this line

//   console.log(result)
//    return result;
  
//  }


//  checkForName('Egor Kolbasov', 'Egor')

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }
// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
