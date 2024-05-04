const func1 = () => {
  let a = 10;
  const func2 = (b) => {
    return a + b;
  };
  return func2;
};

// const val = func1()
// console.log(val(5));

const func3 = () => {
  let a = 1;
  return () => {
    return a;
  };
};
const val = func3();
// console.log(val());

function add() {
  let counter = 0;
  function plus() {
    counter += 1;
    return counter;
  }
  return plus;
}

let f = add();
let g = add();
console.log(f() + g());
