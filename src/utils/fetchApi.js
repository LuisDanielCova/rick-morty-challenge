import { getQuery } from "./getQuery.js";
import fetch from "node-fetch";

export const fetchApi = async (route) => {
  const query = getQuery(route);

  const response = await fetch(
    `https://rickandmortyapi.com/api/${route}/${query}`
  );

  const result = await response.json();

  return result;
};
