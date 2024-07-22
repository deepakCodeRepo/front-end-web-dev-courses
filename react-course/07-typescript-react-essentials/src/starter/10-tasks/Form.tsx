import { FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import type { Task } from "./types";

//NOTE: this is how we define types for props
type FormProps = {
  addTask: (task: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) {
      alert("please enter a task");
      return;
    }
    // console.log(task);
    addTask({ id: nanoid(), description: task, isCompleted: false });
    setTask("");
  };

  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn">
        add task
      </button>
    </form>
  );
};
export default Form;
