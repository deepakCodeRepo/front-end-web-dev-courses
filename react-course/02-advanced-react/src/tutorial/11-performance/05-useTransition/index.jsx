import { useState, useTransition } from "react";

const UseTransitionHook = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    //slow down CPU
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/public/vite.svg" alt="logo" />
          </div>
        );
      });
      console.log(newItems);
      setItems(newItems);
    });
  };

  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
          autoFocus
        />
      </form>
      <h3>Items Below</h3>
      {isPending ? (
        <h3>Loading...</h3>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}
    </section>
  );
};

export default UseTransitionHook;
