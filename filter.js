// Sample array of objects
const people = [
  { name: "John", age: 30, salary: 60000 },
  { name: "Alice", age: 25, salary: 55000 },
  { name: "Bob", age: 35, salary: 70000 },
  { name: "Sarah", age: 28, salary: 48000 },
];

// Sorting the array by age (largest to smallest)
const sortedByAge = people.sort((a, b) => b.age - a.age);

// Filtering the array for individuals with salary > 50000
const filteredBySalary = sortedByAge.filter((person) => person.salary > 50000);

// Displaying the filtered array
console.log(filteredBySalary);
