const function1 = () => {
  try {
    if (!false) {
      throw new Error("Error occured in function 1");
    }
    return true;
  } catch (error) {
    console.log(`Error message  : ${error.message}`);
    return false;
    // throw error;
  }
};

const function2 = () => {
  try {
    const response = function1();
    console.log("try function 2", response);
  } catch (error) {
    console.log("Error message in function 2 ", error.message);
  }
};

function2();

const function3 = () => {
  if (!false) {
    throw new Error("Error occured in function 3");
  }
  return "function 3";
};

const function4 = () => {
  try {
    const data = function3();
    console.log("Data from function 3: ", data);
  } catch (error) {
    console.log(error.message);
  }
};

// function4();

const function5 = () => {
  try {
    const a = 2 + b;
    return a;
  } catch (error) {
    throw new Error("error occured in function 5");
  }
};

const function6 = () => {
  try {
    const a = function5();
  } catch (error) {
    // console.log(error.name);
    console.log(error.message);
  }
};

// function6();
