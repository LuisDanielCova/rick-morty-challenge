import { getEpisodeLocations } from "./getEpisodeLocations.js";
import { promiseArrayEpisode } from "./promisesArray.js";

export const getResultEpisodes = async (routes, resultObject) => {
  let resultsArray = [];

  const promises = routes.map((route) => {
    return promiseArrayEpisode(route, resultsArray);
  });

  await Promise.all(promises);

  resultObject = await getEpisodeLocations(resultsArray, resultObject);

  return resultObject;
};
