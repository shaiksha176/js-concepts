// const getData = () => {
//   try {
//     const sum = a + b;
//     return !!sum;
//   } catch (error) {
//     return null;
//     // throw error;
//   }
// };

// const function1 = () => {
//   try {
//     const response = getData();
//     console.log("Response in function 1 ", response);
//   } catch (error) {
//     console.log("error in function1");
//     console.log(error);
//   }
// };

// const function2 = () => {
//   const response = getData();
//   if (!response) {
//     console.log("failure");
//   } else {
//     console.log("success");
//   }
// };

// // function1();
// function2();

const getData = async () => {
  try {
    // Assuming a and b are asynchronous values, for example, promises
    const a = await someAsyncFunction();
    const b = await anotherAsyncFunction();

    const sum = a + b;
    return !!sum;
  } catch (error) {
    // console.error("Error in getData:", error);
    return null; // or rethrow the error if needed
  }
};

const function2 = async () => {
  try {
    const response = await getData();
    if (!response) {
      console.log("failure");
    } else {
      console.log("success");
    }
  } catch (error) {
    console.error("Error in function2:", error);
  }
};

function2();
