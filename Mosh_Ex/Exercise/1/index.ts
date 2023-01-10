//Given the data below, define a type alias for representing users.

let users = [
    {
    name: 'John Smith',
    age: 30,
    occupation: 'Software engineer'
    },
    {
    name: 'Kate Müller',
    age: 28
    }
];
// Solution

type User = {
    name : String
    age : Number
    occupration?: String
}

let user1 : User =  {
    name : "John Smith",
    age : 30,
    occupration : "Software engineer"
}

let user2 : User = {
    name: 'Kate Müller',
    age: 28
}