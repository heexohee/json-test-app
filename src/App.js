import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log();
        console.log("response.json()", response);
        return response.json();
      })
      .then((json) => {
        console.log("json", json);
        setData([...json]);
      });
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div
            style={{
              border: "1px solid black",
              margin: "3px",
            }}
            key={item.id}
          >
            <ul>
              <li>userId : {item.userId}</li>
              <li>id : {item.id}</li>
              <li>title : {item.title}</li>
              <li>body : {item.body}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;