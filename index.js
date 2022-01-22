import express from "express";
import { getCharacters } from "./src/challenges/getCharacters.js";

const app = express();

app.use("/", async (req, res, next) => {
  const characterResult = await getCharacters();
  res.json(characterResult);
});

app.listen(3001, () => {
  console.log(`Servidor corriendo en el puerto 3001`);
});
