import React from "react"; //--optional after react 17
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  img: "./images/book1.jpg",
  title: "The Housemaid",
  author: "Freida McFadden",
};
const secondBook = {
  img: "./images/book2.jpg",
  title: "Just for the Summer",
  author: "Abby Jimenez",
};
const thirdBook = {
  img: "./images/book3.jpg",
  title: "A Court of Mist and Fury",
  author: "Sarah J. Maas",
};

const Booklist = () => {
  return (
    <React.Fragment>
      <h1>Amazon best sellers</h1>
      <section className="booklist">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        />
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        >
          <p>Dummy Paragraph</p>
          <button>Click Me!</button>
        </Book>
        <Book
          img={thirdBook.img}
          title={thirdBook.title}
          author={thirdBook.author}
        >
          <p>para</p>
        </Book>
      </section>
    </React.Fragment>
  );
};

const Book = (props) => {
  // console.log(props);
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <Bookcover img={img} title={title} />
      <Booktitle title={title} />
      <Author author={author} />
      {children}
      {console.log(props)}
    </article>
  );
};

const Bookcover = ({ img, title }) => <img src={img} alt={title} />;

function Booktitle(props) {
  return <h3 style={{ fontSize: "1.5rem" }}>{props.title}</h3>;
}
const Author = (props) => {
  const inlineStyles = {
    color: "#617d98",
    fontSize: "1rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineStyles}>{props.author.toUpperCase()}</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
