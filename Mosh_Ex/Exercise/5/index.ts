//What is the problem in this piece of code

`
    let value: unknown = 'a'; 
    console.log(value.toUpperCase());
 `

 //Solution

// Value is declared as an unknown type. 
// In order to call methods on an unknown object, 
// we have to use type narrowing first:

 let value: unknown = 'a';
    if (typeof value === 'string')
        console.log(value.toUpperCase());

