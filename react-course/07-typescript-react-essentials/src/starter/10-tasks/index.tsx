import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import type { Task } from "./types";

function loadList(): Task[] {
  const storedList = localStorage.getItem("list");
  return storedList ? JSON.parse(storedList) : [];
}

function updateStorage(list: Task[]): void {
  localStorage.setItem("list", JSON.stringify(list));
}

function Component() {
  const [list, setList] = useState<Task[]>(() => loadList());

  function addTask(task: Task): void {
    setList([...list, task]);
  }
  console.log(list);

  function toggleTask(id: string) {
    setList(
      list.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  }

  useEffect(() => {
    updateStorage(list);
  }, [list]);

  return (
    <div>
      <h2>Task List</h2>
      <Form addTask={addTask} />
      <List list={list} toggleTask={toggleTask} />
    </div>
  );
}
export default Component;
