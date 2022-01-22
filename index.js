import express from "express";
import { getResults } from "./src/getResults.js";

const app = express();

app.use("/", getResults);

app.listen(3001, () => {
  console.log(`Servidor corriendo en el puerto 3001`);
});
