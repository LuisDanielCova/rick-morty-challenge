import express from "express";
import { getRouteNumber } from "./src/utils/getRouteCharCount.js";

const app = express();

app.use("/", async (req, res, next) => {
  const count = await getRouteNumber("character");
  res.json(count);
});

app.listen(3001, () => {
  console.log(`Servidor corriendo en el puerto 3001`);
});
