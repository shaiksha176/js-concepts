const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

// for (const key in obj) {
//   console.log(obj[key]);
// }

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: [],
};

// for (let key in graph) {
//   for (let neighbor of graph[key]) {
//     console.log(neighbor);
//     console.log("*********");
//   }
// }

// const obj3 = {};
// console.log(obj3["name"]);

const newObj = {
  ...obj,
  requestID: 23,
  name: "John Doe",
};

console.log(newObj);
