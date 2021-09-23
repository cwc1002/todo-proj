type MyNumber = number;
const n: MyNumber = 10;

type Container<T> = {value: T};

type User = {name: string, age: number};
const testUser: User = {name: 'Kim', age: 20};

function printInfo(user: {name: string, age: number}) {
  console.log(`User Information - Name : ${user.name}, Age : ${user.age}`);
}

function printInfo2(user: User) {
  console.log(`User Information - Name : ${user.name}, Age : ${user.age}`);
}
