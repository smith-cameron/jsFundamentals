//> Example --------------
//? Problem ?:
//< const exampleFunction = (param) => {
//< return param === "hello" ? "hello!!!" : "bye bye!"​
//< }
//< console.log(exampleFunction("hello")) //Output : hello!!!
//< console.log(exampleFunction("not hello")) //Output : bye bye!
//? Problem 2: ...ect
//> ------------------------- 

//? Problem 1
const confimrAge = (age) => {
  return age >= 18 ? "You are good to go!" : "Sorry! You must be 18 or older!"
}
console.log(confimrAge(7))
console.log(confimrAge(18))
console.log(confimrAge(28))

// ? Problem 2
const isRaining = (weather) => {
  return weather ? "Get your rain jacket!" : "No rain on today's forecast!"
}
console.log(isRaining(true))
console.log(isRaining(false))

// ? Problem 3
const isEven = (input) => {
  return input % 2 == 0 ? "That's an even number!" : "That's an odd number!"
}
console.log(isEven(0))
console.log(isEven(6))
console.log(isEven(5))

// ? Problem 4
const isGreater = (num1, num2) => {
  return num1 > num2 ? `${num1} is more than ${num2}!` : num2 === num1 ? "They are equal" : `${num1} is less than ${num2}!`
}
console.log(isGreater(1, 5))
console.log(isGreater(11, 5))
console.log(isGreater(15, 15))
