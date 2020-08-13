const fizzBuzz = number => {;
    if (number % 3 === 0 && number % 5 === 0){
      number = "FizzBuzz"
    }
    else if (number % 3 === 0) {
      number = "Fizz";
  }
    else if (number % 5 === 0) {
      number = "Buzz";
  }
  return number;
}
module.exports = fizzBuzz;
