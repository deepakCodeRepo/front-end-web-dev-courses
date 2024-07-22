import React from "react"; //--optional after react 17
import ReactDOM from "react-dom/client";

import "./index.css";
import { Books } from "./listofBooks";
import Book from "./bookComponent";

const Booklist = () => {
  const someValue = "function is passed down as a prop from Booklist";
  function displayValue() {
    console.log(someValue);
  }

  function getBook(id) {
    const bookSelect = Books.find((book) => book.id === id);
    console.log(bookSelect);
  }

  return (
    <React.Fragment>
      <h1>Amazon best sellers</h1>
      <section className="booklist">
        {Books.map((book, index) => {
          console.log(book);
          return (
            <Book
              bookNum={index}
              {...book}
              key={book.id}
              id={book.id}
              getBook={getBook}
              displayValue={displayValue}
            />
          );
        })}
        <EventExample />
      </section>
    </React.Fragment>
  );
};

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log("form submitted");
          }}
        >
          Submit
        </button>
        <div>
          <button onClick={handleButtonClick}>Click Me</button>
        </div>
      </form>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
