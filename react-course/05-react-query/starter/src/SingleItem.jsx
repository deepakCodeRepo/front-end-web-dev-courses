import { useUpdateTasks, useDeleteTasks } from "./reactQueryCustomHooks.jsx";

const SingleItem = ({ item }) => {
  const { updateTask } = useUpdateTasks();
  const { deleteTask } = useDeleteTasks();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => updateTask({ taskID: item.id, taskDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
