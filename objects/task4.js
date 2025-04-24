const person = {
    firstName: "Denys",
    lastName: "Lahoda",
    age: 26
  };
  
  person.email = "denys@gmail.com";
  
  delete person.age;
  
  console.log(person);
  