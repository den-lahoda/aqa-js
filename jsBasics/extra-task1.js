const firstArray = [5, 3, 23, 6, 8];
const secondArray = [null];
const thirdArray = [3, 3, 0, 1, 6];

function sumOfNumbers(array) {
  const isAllNumbers = array.every(
    (element) => typeof element === 'number' && !isNaN(element)
  );

  if (array.length <= 1 || !isAllNumbers) {
    console.log(0);
    return;
  }

  const minValue = Math.min(...array);
  const maxValue = Math.max(...array);
  const sum = array.reduce((acc, num) => acc + num, 0) - (minValue + maxValue);
  console.log(`Array: ${array}, sum of needed numbers: ${sum}`);
}

sumOfNumbers(firstArray);
sumOfNumbers(secondArray);
sumOfNumbers(thirdArray);
