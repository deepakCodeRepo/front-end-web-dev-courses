import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch("/");
      return data;
    },
  });
  return { isLoading, error, data };
};

export const useUpdateTasks = () => {
  const queryClient = useQueryClient();
  const { mutate: updateTask } = useMutation({
    mutationFn: ({ taskID, taskDone }) =>
      customFetch.patch(`/${taskID}`, { isDone: taskDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("item updated");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { updateTask };
};

export const useDeleteTasks = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask } = useMutation({
    mutationFn: (taskID) => customFetch.delete(`/${taskID}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("item deleted");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { deleteTask };
};

export const useCreateTasks = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("item added");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isLoading };
};
