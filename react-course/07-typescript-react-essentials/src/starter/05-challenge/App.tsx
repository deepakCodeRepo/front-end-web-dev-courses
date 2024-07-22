import Component from "./index";

function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      <Component type="basic" name="ram" />
      <Component type="advanced" name="max" email="max@gmail.com" />
    </main>
  );
}

export default App;
