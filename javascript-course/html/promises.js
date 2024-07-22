let task = true;
function task1() {
  return new Promise((resolve, reject) => {
    if (task === true) {
      setTimeout(() => {
        resolve(console.log("task 1 complete")); // we can perform some operation in resolve and reject
      }, 4000);
    } else {
      reject(console.log("task 1 not complete"));
    }
  });
}
function task2() {
  return new Promise((resolve, reject) => {
    if (task === true) {
      setTimeout(() => {
        resolve("task 2 complete"); // we can send a value in resolve and reject and perform the operation in then()
      }, 500);
    } else {
      reject("task 2 not complete");
    }
  });
}
function task3() {
  return new Promise((resolve, reject) => {
    if (task === true) {
      setTimeout(() => {
        resolve("task 3 complete");
      }, 2000);
    } else {
      reject("task 3 not complete");
    }
  });
}
task1()
  .then(() => {
    console.log("triggering task 2 in then()");
    return task2();
  })
  .then((value) => {
    console.log(value); // 'value' we are getting from resolve() in task 2
    console.log("triggering task 3 in then()");
    return task3();
  })
  .then((value) => {
    console.log(value); // 'value' we are getting from resolve() in task 3
    console.log("all tasks are completed!!");
  })
  .catch((error) => console.error("error caught: " + error)); // here error is the value we get from reject() in task2
