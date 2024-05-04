let counter = 1;

// Set interval to execute a function every 1 second
const intervalId = setInterval(() => {
  console.log(`Interval: Function executed every 1 second. Count: ${counter}`);
  counter++;

  // Check condition to cancel the interval
  if (counter > 5) {
    clearInterval(intervalId); // Cancel the interval
    console.log("Interval canceled.");
  }
}, 1000);

let timeoutId;

// Set a timeout to execute a function after 3 seconds
timeoutId = setTimeout(() => {
  console.log("Timeout: Function executed after 3 seconds.");
}, 3000);

// Cancel the timeout before it executes
clearTimeout(timeoutId);
console.log("Timeout canceled.");
