async function function1() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log(error);
    return "wergt";
  }
}

// function1().then((data) => console.log(data));
// function1()

function fetchData(url, callback) {
  // Simulate fetching data from a URL
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

// fetchData takes a URL and a callback function
// fetchData("https://example.com/api/data", (result) => {
//   console.log("Data received:", result);
// });

const getData = (data) => {
  console.log(data);
};

// fetchData takes a URL and a callback function
// fetchData("https://example.com/api/data", getData);

const function3 = async () => {
  console.log("started");
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ok");
    }, 5000);
  });
  // promise.then((value) => {
  //   console.log(`Promise resolved with ${value}`);
  // });
  const response = await promise;
  console.log(`Promise resolved with ${response}`);
  console.log("ended");
};

// function3();

const function4 = async (inp) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inp);
    }, 5000);
  });
  const result = await promise;
  console.log(result);
  return result;
};

const function5 = async() => {
  const sum = 5;
  function4(sum);
  return;
};

function5();
