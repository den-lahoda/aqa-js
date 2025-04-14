function isAdult(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  const result1 = isAdult(25);
  console.log('Is 25 years old an adult?', result1);
  
  const result2 = isAdult(15);
  console.log('Is 15 years old an adult?', result2);