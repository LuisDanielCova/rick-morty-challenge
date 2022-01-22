import express from "express";
import { getEpisodes } from "./src/challenges/getEpisodes.js";

const app = express();

app.use("/", async (req, res, next) => {
  const results = await getEpisodes();
  return res.json(results);
});

app.listen(3001, () => {
  console.log(`Servidor corriendo en el puerto 3001`);
});
