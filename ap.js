const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved!!");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  reject("Rejected!!");
});

Promise.all([promise1, promise2])
  .then((data) => console.log(data))
  .catch((err) => {
    console.log("Error Occured");
    console.log(err);
  });

Promise.allSettled([promise1, promise2])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log("Error Occured");
    console.log(err);
  });
