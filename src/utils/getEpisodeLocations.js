import { getOrigins } from "./getOrigins.js";

export const getEpisodeLocations = async (resultsArray, resultObject) => {
  const episodeArray = resultsArray.filter((result) => {
    return result.resource === "episode";
  })[0];
  const characterArray = resultsArray.filter((result) => {
    return result.resource === "character";
  })[0];

  const promise = new Promise((res) => {
    res(getOrigins(episodeArray, characterArray, resultObject));
  });

  await promise;

  return resultObject;
};
