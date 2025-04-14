function calculateArea(width, height) {
    return width * height;
}
  
const result1 = calculateArea(5, 10);
console.log('Function Declaration:', result1);

const calculateAreaExpr = function(width, height) {
    return width * height;
};
  
const result2 = calculateAreaExpr(5, 10);
console.log('Function Expression:', result2);
  

const calculateAreaArrow = (width, height) => width * height;

const result3 = calculateAreaArrow(5, 10);
console.log('Arrow Function:', result3);
