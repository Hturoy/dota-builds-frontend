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

  //hero.attributes.name
  //hero.attributes.dota_build.data.attributes.core1
  //hero.attributes.image.data.attributes.name

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello1!</h1>

      {data.length > 0
        ? data.map((hero, idx) => {
            return (
              <div className="flex" key={idx}>
                <img
                  src={hero.attributes.image.data.attributes.name}
                  alt="Image of dota hero"
                />
                <h2>{hero.attributes.name}</h2>
                <ul>
                  <li>{hero.attributes.role}</li>
                  <li>{hero.attributes.type}</li>
                  <li>{hero.attributes.difficulty}</li>
                </ul>
                <p>{hero.attributes.description}</p>
              </div>
            );
          })
        : null}
    </>
  );
}
export default App;
