import express from "express";
import { fetchApi } from "./src/utils/fetchApi.js";

const app = express();

app.use("/", async (req, res, next) => {
  const response = await fetchApi("episode");
  res.json(response);
});

app.listen(3001, () => {
  console.log(`Servidor corriendo en el puerto 3001`);
});
