import { getRouteCharCount } from "./getRouteCharCount.js";

export const promisesArrayCharacter = async (route, resultObject) => {
  const number = await getRouteCharCount(route);
  resultObject.results.push({
    char: route[0],
    resource: route,
    count: number,
  });
  return resultObject;
};
