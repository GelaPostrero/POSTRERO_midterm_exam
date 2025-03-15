
function sumArray(numbers) {
    //using the reduce method to add all numbers
    return numbers.reduce(function(total, currentNumber) {
      //adds the current number to the total then returns the new total
      return total + currentNumber;
    }, 0);
  }

//examples
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, 10, 10, 10, 10])); 