import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHooks";

const Items = () => {
  const { isLoading, error, data } = useFetchTasks();

  // console.log(data);

  if (isLoading) {
    return <h5 style={{ marginTop: "1rem" }}>Loading...</h5>;
  }

  //INFO: for a generic error message by dev
  // if (isError) {
  //   return (
  //     <h5 style={{ marginTop: "1rem", color: "red" }}>there was an error...</h5>
  //   );
  // }
  //INFO: for a specific error message by axios
  // console.log(error);
  if (error) {
    return (
      <h5 style={{ marginTop: "1rem", color: "red" }}>{error.response.data}</h5>
    );
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
