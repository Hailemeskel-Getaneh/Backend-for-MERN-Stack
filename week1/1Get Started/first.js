// This program is important for backend development using node js

console.log('Hello , from node js')

//let us review some of the ES6 features of java script

const myName = 'Hailemeskel';

let today = 'Thursday';

let func = () => {
    let today = 'Firday';
    console.log(`Today is ${today}`)
}
func()
console.log(`Today is ${today}`)


// let us learn something about destructuring

      //Array destructuring

      let colors = ['red', 'green', 'blue'];
      let color1, color2, color3 ;

       // the traditional way is:
         color1 = colors[0];
         color2 = colors[1];
         color3 = colors[2];

       // the ES6 feature is 

        [color1,color2, color3 ] = colors;

        console.log(`${color1}, ${color2}, ${color3}`)
    // another way

    let [ ,color] = colors;
        console.log(color) // prints the second color
    let [, , color4] = colors;
       console.log(color4); // rints the third color since there are two commas for the first two elemets


// Object destructuring

const person = {
    name: 'Marti Zemedkun',
    age:19,
    department:'Medicine'
}

// traditional way of destructuring objects 

const name = person.name;
const age = person.age ;
const department = person.department;
  
   console.log(`My name is ${name}. I am ${age} years. I am studying ${department} `)
// new feature of destructuring

const {PersonName, PersonAge, PersonDepartment } = person // you can also change the name of the variables

console.log(`My name is ${PersonName}. I am ${PersonAge} years. I am studying ${PersonDepartment} `)

// Default values in destturcturing

const allColors = ["red"];
const [firstColor, secondColor = "green"] = allColors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"
