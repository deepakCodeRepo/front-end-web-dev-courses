import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  const { name, setName } = useGlobalContext();
  console.log(name);
  console.log(setName);

  return <h1>App component</h1>;
}

export default App;
