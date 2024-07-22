let task = true;
function task1() {
  return new Promise((resolve, reject) => {
    if (task === true) {
      setTimeout(() => {
        resolve("task 1 complete"); // we can perform some operation in resolve and reject
      }, 4000);
    } else {
      reject("task 1 not complete");
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
async function doTasks() {
  try {
    const taskOneResult = await task1();
    console.log(taskOneResult);

    const taskTwoResult = await task2();
    console.log(taskTwoResult);

    const taskThreeResult = await task3();
    console.log(taskThreeResult);

    console.log("all tasks are completed!!");
  } catch (error) {
    console.log(error);
  }
}

doTasks();
