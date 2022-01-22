import { promisesArrayCharacter } from "../utils/promisesArray.js";

export const getCharacters = async () => {
  let start = process.hrtime();
  const routes = ["character", "location", "episode"];

  let resultObject = {
    exercise_name: "Char counter",
    time: 0,
    in_time: true,
    results: [],
  };

  const promises = routes.map((route) =>
    promisesArrayCharacter(route, resultObject)
  );

  await Promise.all(promises);

  resultObject.time = `${process.hrtime(start)[0]}s, ${(
    process.hrtime(start)[1] / 1000000
  ).toFixed(3)}ms`;

  resultObject.in_time = process.hrtime(start)[0] < 3;

  return resultObject;
};
