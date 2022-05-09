// 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
//  tesla , Mercedes


// 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const {name}=employee;
const { name: otherName } = employee;
//Predict the output
console.log(name);
// console.log(otherName);

// // undefined
// // elon

// 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}

const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
console.log(person.height)



// 12345
// undefined.

// //4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// // false, true

// //5
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);

//'value'
//[1, 5, 1, 8, 3, 3]
// 1
// 5

// ?   What is DESTRUCTURING ASSIGNMENT ?

// *basically means that you have a data structure, an array or object,
//  *and 
//* you want information from it to be its own variable

// * SETTING A DATA-STRUCTURE = TO ITS OWN VARIABLE

// destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, or properties
//  from objects into distinct variables.


// *  DECLARATIONS NEED TO MATCH THE DATA TYPE  to the right of the equal sign.
// *




const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// AFTER ES6
// const { email } = person;  //SET EMAIL FROM THE DICTIONAIRY PERSON.
// const [,i] = animals; //EACH , INCREMENTS THE INDEX 
// console.log(email);
// // => bob@marley.com
// console.log(i);
// // => horse


const { email, password } = person
console.log(email, password)
const [first,seconed,third] = animals
console.log(first,seconed,third)