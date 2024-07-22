import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  {
    id: 1,
    url: "https://reactjs.org",
    text: "react docs",
  },
  {
    id: 2,
    url: "https://reactrouter.com",
    text: "react router docs",
  },
  {
    id: 3,
    url: "https://reacttraining.com",
    // remove text property to see the error
    text: "react training",
  },
];

function Component() {
  const [text, setText] = useState<string>("Ram");
  const [number, setNumber] = useState(0);
  //NOTE: list will be of type never if we dont provide the generic <string[]>
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);
  console.log(links);

  return (
    <div>
      <h2 className="mb-2">
        {text} : {number} : {list}
      </h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("Sita");
          setNumber(47);
          setList(["hello", "ram"]);
          setLinks([...links, { id: 4, url: "random url", text: "hello" }]);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Component;
