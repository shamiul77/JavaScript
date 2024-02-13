const numbers = [0, 30, 40, 60, 80]
for(i=0; i<numbers.length; i++){    
    console.log(numbers[i]) //access the array using for loop
}
numbers.push(80);   //insert an element in array 
delete numbers[4];  //delete an element from array
numbers[1] = 20;    //update an element in array
console.log(numbers);
