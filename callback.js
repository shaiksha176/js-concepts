const func1 = (callback) => {
  let sum = 1 + 6;
  callback(sum);
};

const func2 = (sum) => {
  console.log(`The sum : ${sum}`);
};

func1(func2);

const func3 = (callback) => {
  console.log("func3 called");
  callback();
};

const func4 = (name) => {
  console.log(`Name is ${name}`);
};

// func3(() => func4("John Wick"));

const func5 = (callback) => {
  console.log("func5 called");
  callback("herf");
};

const func6 = (msg) => {
  return { user: msg };
};

func5(() => (data) => console.log(data));
