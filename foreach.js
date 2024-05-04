const numbers = [1, 2, 3];
const newArr = numbers.forEach((num, index, array) => {
  array[index] = num * 2;
});
console.log(newArr);

const doubled = numbers.map((num) => num * 2);
console.log(numbers);
console.log(doubled);
