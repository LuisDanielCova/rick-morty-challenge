import { getRouteCharCount } from "./getRouteCharCount.js";
import { fetchApi } from "./fetchApi.js";

export const promisesArrayCharacter = async (route, resultObject) => {
  const number = await getRouteCharCount(route);
  resultObject.results.push({
    char: route[0],
    resource: route,
    count: number,
  });
  return resultObject;
};

export const promiseArrayEpisode = async (route, resultsArray) => {
  const result = await fetchApi(route);
  resultsArray.push({ resource: route, result });
  return resultsArray;
};
