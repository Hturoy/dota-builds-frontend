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
                className="ml-auto mr-auto overflow-auto grid items-start max-w-md m-5 p-5 border-solid border-2 border-gray-600 bg-gray-300 shadow-2xl rounded"
                key={idx}
              >
                <img
                  className="max-w-md mr-5 border-solid border-2 border-gray-600 rounded shadow-xl"
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
                <div className="border-solid border-2 border-gray-600 rounded mt-5 p-5 shadow-xl">
                  <h3 className="text-lg font-semibold">Build</h3>
                  <ul>
                    <li>{hero.attributes.dota_build.data.attributes.boots}</li>
                    <li>{hero.attributes.dota_build.data.attributes.core1}</li>
                    <li>{hero.attributes.dota_build.data.attributes.core2}</li>
                    <li>{hero.attributes.dota_build.data.attributes.slot4}</li>
                    <li>{hero.attributes.dota_build.data.attributes.slot5}</li>
                    <li>{hero.attributes.dota_build.data.attributes.slot6}</li>
                  </ul>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}
export default App;
