function add(a, b, c) {
    return a + b + c;
  }
  
  const addCurried = function(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  };
  
  console.log(add(1, 2, 3)); // 6 (normal call)
  console.log(addCurried(1)(2)(3)); // 6 (curried call)
  
  const add5 = addCurried(5); // Create a function that adds 5 to any number
  console.log(add5(10)(6)); // 15
  
  const sumOfFirst3 = addCurried(0)(1)(2); // Add the first 3 numbers
  console.log(sumOfFirst3); // 3
  