function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }
  return increment; // this returns the function increment
  // return { increment }; // this returns the object with method increment in it. Return object when there are multiple inner        functions in the closure.
  //   return { increment: increment };
}

let cFun = createCounter();
console.log(typeof cFun);
for (let i = 0; i < 10; i++) {
  cFun(); // this is used to call the function increment
  // cFun.increment(); // this is used to call the method in the object
}
