import { getCharacters } from "./challenges/getCharacters.js";
import { getEpisodes } from "./challenges/getEpisodes.js";

export const getResults = async (req, res, next) => {
  const characters = await getCharacters();
  const episodes = await getEpisodes();

  return res.json([characters, episodes]);
};
