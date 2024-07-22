import { useToggle } from "./useToggle";

const ToggleExample = () => {
  const [show, toggle] = useToggle(false);
  console.log(show);

  return (
    <div>
      <h1>Toggle Custom Hook</h1>
      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && <h3>Some Stuff</h3>}
    </div>
  );
};

export default ToggleExample;
