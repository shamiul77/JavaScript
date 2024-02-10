
const cars=[ "suzuki", "BMW", "VOLVO"]
car = cars[2];
console.log(car);


const names = ["shamiul", "Naim","Rakib"];
name = names[1];
console.log(name);


const cars=[ "suzuki", "BMW", "VOLVO"]
cars[2]= "yamaha";
console.log(cars);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruit = fruits[1];
console.log(fruit);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruit = fruits[fruits.length - 4];
console.log(fruit);


const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Orange2");
console.log(fruits);


const fruits = ["Banana", "Orange", "Apple"];
fruits[7]= "lemon";
console.log(fruits);


const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
console.log(person["age"] + " " + person["lastName"]);



const fruits = ["Banana", 1 , "Apple", "Mango"];
console.log(typeof fruits);


const fruits = [1, 2, 3,4];
console.log(fruits.join("*"));


const fruits = ["Banana" , "Apple", "Mango"];
fruits.shift();
fruits.shift();
console.log(fruits);


const fruits = ["Banana" , "Apple", "Mango"];
fruits.unshift("lemon");
console.log(fruits);


const fruits = ["Banana" , "Apple", "Mango"];
console.log(fruits);
fruits[fruits.length]=("lemon");
console.log(fruits);


const fruits = ["Banana" , "Apple", "Mango"];
delete fruits [2];
console.log(fruits);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2, 1, "Guava", "Lemon" );
console.log(fruits);


const fruits = ["Banana", "Orange", "Apple", "Mango", "lemon"];
const x = fruits.slice(1,4);
console.log(x);


const num =["orange","apple","mango","guava"];
num.sort();
console.log(num);
num.reverse();
console.log(num);


const numbers=[1,2,3,4,5]; //at method
num = numbers at[2];
console.log(num);


const numbers=[1,2,3,4,5];   //join method
num =  numbers.join("*");
console.log(num);


const numbers=[1,2,3,4,5];   //pop method
num = numbers.pop();
console.log(num);


const numbers = [1,2,3,4];  //push method
num = numbers.push(5);
console.log(numbers);


const numbers = [0,1,2,3,4];    //shift method
number = numbers.shift();
console.log(numbers);


const numbers=[1,2,3,4,5];   //unshift
num = numbers.unshift(0);
console.log(numbers);


const numbers=[0,1,2,3,4,5];     //splice
num = numbers.splice(2,4,5,6,7);
console.log(numbers);


const arr = [0,1,2,3,4];        //slice
newArr = arr.slice(2);
console.log(newArr);


const arr = [0,1,2,3,4,5];      //slice
new_arr = arr.slice(1,5);
console.log(new_arr);


let number = [1,3,5,7,9,11,13,15,17,19]      //loop access in array
for(let i=0; i<number.length; i++){
    console.log(number[i]+2);
}


let x = [1,3,5,7,9,11,13,15,17,19]  //dynamic access in array 
console.log(x[3]);




let x = ["apple", "mango", "banana", "Lemon", "orange"];    //slice+loop
y = x.slice(0,3);
console.log(y);for
for(let i=0; i<y.length; i++){
    console.log(y[i]);
}
