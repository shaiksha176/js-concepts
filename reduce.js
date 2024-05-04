// Sample array of objects
const people = [
  { name: "John", age: 30, salary: 60000 },
  { name: "Alice", age: 25, salary: null },
  { name: "Bob", age: 35, salary: null },
  { name: "Sarah", age: 28, salary: 48000 },
];

const totalSalaries = people
  .filter((person) => person.salary !== null)
  .reduce((acc, person) => acc + person.salary, 0);

console.log(`Total Salary : ${totalSalaries}`);
