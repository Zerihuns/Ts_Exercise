//Simplify the following code snippets

//1
let user1 = users[1];
console.log(user1 && user1.age ? user1.occupation.dep : undefined);

//2

let x = foo !== null && foo !== undefined ? foo : bar();


//Solution

//1 = 7- Optional Chaining
let user = user1;
console.log(user?.occupation?.dep);


//2 == 7- Optional Calling
let x = foo ?? bar();
//
