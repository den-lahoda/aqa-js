const users = [
  { name: 'Denys', email: 'denys@gmail.com', age: 26 },
  { name: 'Daria', email: 'datia@gmail.com', age: 22 },
  { name: 'Ilya', email: 'ilya@gmail.com', age: 17 },
];

for (const { name, email, age } of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
