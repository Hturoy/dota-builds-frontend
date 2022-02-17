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
      {data.length > 0
        ? data.map((hero, idx) => {
            return (
              <div
                className="grid items-start max-w-md m-5 p-5 border-solid border-2 border-violet-600"
                key={idx}
              >
                <img
                  className="max-w-md"
                  src={hero.attributes.image.data.attributes.name}
                  alt="Image of dota hero"
                />
                <h2 className="text-lg font-semibold">
                  {hero.attributes.name}
                </h2>
                <ul className="mb-5 mt-5">
                  <li>Role: {hero.attributes.role}</li>
                  <li>Type: {hero.attributes.type}</li>
                  <li>Difficulty: {hero.attributes.difficulty}</li>
                </ul>
                <p className="max-w-md">{hero.attributes.description}</p>
              </div>
            );
          })
        : null}
    </>
  );
}
export default App;
