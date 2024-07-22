import { useState } from "react";
import { fetchTours, type Tour } from "./types";
import { useQuery } from "@tanstack/react-query";

function Component() {
  const [tours, setTours] = useState<Tour[]>([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tours"],
    queryFn: () => fetchTours(),
  });
  // console.log(data);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div>
      <h2>Tours</h2>
      <button className="btn btn-center mb-1" onClick={() => setTours(data)}>
        click me
      </button>
      {tours.map((tour: Tour) => {
        return (
          <h4 key={tour.id} className="mb-1">
            {tour.name}
          </h4>
        );
      })}
    </div>
  );
}

export default Component;
