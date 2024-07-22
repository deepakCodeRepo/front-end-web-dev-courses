const Book = (props) => {
  // console.log(props);
  const { bookNum, img, title, author, id, getBook, displayValue } = props;
  return (
    <article className="book">
      {/* <p>#{bookNum + 1}</p> */}
      <p>{`#${bookNum + 1}`}</p>
      <Bookcover img={img} title={title} />
      <Booktitle title={title} />
      <Author author={author} />
      <button onClick={() => console.log(title)}>display title</button>
      <div>
        <button onClick={displayValue}>Display value</button>
      </div>
      <div>
        <button onClick={() => getBook(id)}>Get Book</button>
      </div>
      {/* {console.log(props)} */}
    </article>
  );
};
export default Book;

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
