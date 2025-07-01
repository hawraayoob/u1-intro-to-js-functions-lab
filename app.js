const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Result:', maxOfTwoNumbers(3, 9));



const isAdult = age => {
  return age >= 18 ? 'Adult' : 'Minor';
}

console.log('Result:', isAdult(21));



const isCharAVowel = char => {
  return 'aeiou'.includes(char.toLowerCase());
}

console.log('Result:', isCharAVowel("a"));


const generateEmail = (name, domain) => {
  return `${name}@${domain}`;
}

console.log('Result:', generateEmail("johnsmith", "example.com"));



const greetUser = (name, timeOfDay) => {
  return `Good ${timeOfDay}, ${name}!`;
}

console.log('Result:', greetUser("Sam", "morning"));


const maxOfThree = (x, y, z) => {
  return Math.max(x, y, z);
}

console.log('Result:', maxOfThree(5, 10, 18));


const calculateTip = (billAmount, tipPercentage) => {
  return (billAmount * tipPercentage) / 100;
}

console.log('Result:', calculateTip(50, 20));


const convertTemperature = (temp, scale) => {
  return scale === 'C' ? (temp * 9/5) + 32 : (temp - 32) * 5/9;
}

console.log('Result:', convertTemperature(32, "C"));


const basicCalculator = (num1, num2, operation) => {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
    default:
      return null;
  }
}

console.log('Result:', basicCalculator(10, 5, "subtract"));