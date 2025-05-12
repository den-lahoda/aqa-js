const number = 7;

// Multiplication table using 'for'
console.log("------- Using 'for' loop -------");
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Multiplication table using 'while'
console.log("------- Using 'while' loop -------");
let j = 1;
while (j <= 10) {
  console.log(`${number} x ${j} = ${number * j}`);
  j++;
}
