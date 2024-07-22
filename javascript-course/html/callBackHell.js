function task1(callback) {
  setTimeout(() => {
    console.log("task 1 complete");
    callback(); // if the callback() is outside setTimeout then tasks are not completed in order
  }, 4000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("task 2 complete");
    callback();
  }, 500);
}
function task3() {
  setTimeout(() => {
    console.log("task 3 complete");
  }, 2000);
}
task1(() => {
  task2(() => {
    task3();
  });
});
