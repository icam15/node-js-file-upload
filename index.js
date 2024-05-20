import express from "express";
import { singleRouter } from "./single-fileUpload.js";
import { manyRouter } from "./many-fileUpload.js";

const app = express();

app.use(express.json());
app.use(manyRouter);
app.use(singleRouter);

app.listen(8080, () => {
  console.log("server run");
});
