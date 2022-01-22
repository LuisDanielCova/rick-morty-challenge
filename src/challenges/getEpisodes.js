import { getResultEpisodes } from "../utils/getResultEpisodes.js";

export const getEpisodes = async () => {
  let start = process.hrtime();
  const routes = ["character", "episode"];

  let resultObject = {
    exercise_name: "Episode locations",
    time: 0,
    in_time: true,
    results: [],
  };

  resultObject = await getResultEpisodes(routes, resultObject);

  resultObject.time = `${process.hrtime(start)[0]}s, ${(
    process.hrtime(start)[1] / 1000000
  ).toFixed(3)}ms`;

  resultObject.in_time = process.hrtime(start)[0] < 3;

  return resultObject;
};
