import express from "express";
import { singleRouter } from "./single/single-router.js";

const app = express();

app.use(express.json());
// app.use(manyRouter);
app.use(singleRouter);

app.listen(8080, () => {
  console.log("server run");
});
