import { fetchApi } from "./fetchApi.js";

export const getRouteNumber = async (route) => {
  const results = await fetchApi(route);

  const names = results.map((value) => {
    return value.name;
  });

  const regexCharacters = new RegExp(route.substr(0, 1), "gi");

  let number = 0;
  names.map((value) => {
    const characters = value.match(regexCharacters);
    if (characters) return (number += characters.length);
  });

  return number;
};
