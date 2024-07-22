import Component from "./reactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <h2>React & Typescript</h2>
        <Component />
      </main>
    </QueryClientProvider>
  );
}

export default App;
