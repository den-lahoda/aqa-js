const car1 = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

const car2 = {
  brand: 'Toyota',
  model: 'Camry',
  owner: 'Олена',
};

const car3 = {
  ...car1,
  ...car2,
};

console.log(car3);
