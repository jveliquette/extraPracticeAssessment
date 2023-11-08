// defining an interface User
type User = {
    id: number;
    name: string;
    email: string;
  }

  // declaring a variable named users, of type User array, and setting it equal to an array of objects of type user
const users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

  // declaring a functuon called getUserById that takes id as a parameter (the parameter is of type number). The function will return undefined or an object of User from the array
function getUserById(id: number): User | undefined {
    const user = users.find(user => user.id === id);
    if (!user) {
        throw new Error(`User with ID ${id} not found`);
    }
    return user;
}

  console.log(getUserById(2));
  /* This code defines an interface User and an array of User objects. The getUserById function takes an id parameter and returns the corresponding User object from the array if it exists, or undefined otherwise. The code then calls the getUserById function with an argument of 2 and logs the result to the console.
  Your task is to modify the code to throw an error if the user is not found instead of returning undefined. You can use the built-in Error constructor to create a new error object with a message of your choice.
  Good luck! 🍀*/
