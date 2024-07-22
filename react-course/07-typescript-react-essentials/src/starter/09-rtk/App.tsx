import Component from "./index";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <main>
        <h2>React & Typescript</h2>
        <Component />
      </main>
    </Provider>
  );
}

export default App;
