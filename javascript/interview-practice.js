// function
function greeting(name) {
  return `Hello, ${name}`;
}
// console.log(greeting("atik"));

// arow function
const greeting2 = (name) => {
  return `Hello, ${name}`;
};
// console.log(greeting2("atik"));

/* Array */
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);
const even = nums.filter((n) => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);
// console.log(doubled);
// console.log(even);
// console.log(sum);

const obj = {
  name: "atik",
  age: 24,
  sayName() {
    console.log(this.name);
  },
};
obj.sayName();
