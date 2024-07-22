import { useState, useEffect } from "react";
import { type Tour, tourSchema } from "./types";
import { url } from "./types";

function Component() {
  // tours
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch tours...`);
        }
        const rawData: Tour[] = await response.json();

        const result = tourSchema.array().safeParse(rawData);
        if (!result.success) {
          console.log(result.error.message);
          throw new Error(`Failed to parse tours`);
        }
        setTours(result.data);
        console.log(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "there was an error...";
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error: {isError}</h3>;
  }

  if (tours.length === 0) {
    return <h3>No tours available.</h3>;
  }

  return (
    <div>
      <h2>Tours</h2>
      {tours.map((tour) => {
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
