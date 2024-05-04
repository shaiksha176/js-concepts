// Function to fetch data from a server
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
      // Simulating a failed asynchronous operation
      // reject(new Error('Failed to fetch data'));
    }, 2000);
  });
}

// Using the fetchData() function with promises
// fetchData()
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

let pr = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Resolved");
  }, 2000);
});

// console.log(pr);

pr.then(() => console.log("Then function executed"));
