import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, HEROES, POPULATE } from "./utils/api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + HEROES + POPULATE)
      .then((response) => setData(response.data.data));
  });

  return (
    <>
      <h1>Hello1!</h1>
      <ul>
        {data.length > 0
          ? data.map((hero, idx) => {
              return <li key={idx}>{hero.attributes.name}</li>;
            })
          : null}
      </ul>
    </>
  );
}
export default App;
