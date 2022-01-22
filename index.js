import express from "express";

const app = express();

app.use("/", (req, res, next) => {
  res.json({ Message: "Hello from index.js" });
});

app.listen(3001, () => {
  console.log(`Servidor corriendo en el puerto 3001`);
});
