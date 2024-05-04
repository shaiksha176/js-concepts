let array1 = [];

// if (array1.length) {
//   console.log("Array1 is not empty");
// } else console.log("Array 1 is empty");

let array2 = undefined;

// throws typeError: Cannot read property 'length' of null if array2=null, throws Cannot read property 'length' of undefined if array2=undefined
// if (array2.length) {
//   console.log("array2 contains elements");
// } else console.log("array2 is empty");

// if (Array.isArray(array2)) {
//   console.log("array2 is an Array");
// } else console.log("array2 is not array");

// let user;
// console.log(user.name) // cannot read property 'name' of undefined (type error)
// console.log(user?.name) // console logs 'undefined'
let user = {
  firstName: "John",
  lastName: "Doe",
  location: {
    country: "UK",
    city: "London",
    nri: false,
  },
};

console.log(
  user.location.state?.name ||
    "No object with the name 'state' exists in user obj",
);
console.log(
  user.location.state?.name ??
    "No object with the name 'state' exists in user obj",
);
console.log(user.location.nri || "Not an NRI");
console.log(user.location.nri ?? "Not an NRI");
