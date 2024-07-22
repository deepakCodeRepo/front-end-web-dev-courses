import Component from "./index";

function App() {
  return (
    <main>
      <Component name="Ram" id={121}>
        <h2>Hello Ram!!</h2>
      </Component>
      <Component id={47} />
    </main>
  );
}

export default App;
