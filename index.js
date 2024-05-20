import express from "express";
import { singleRouter } from "./singleUpload/single-router.js";
import { manyRouter } from "./manyUpload/many-Router.js";

const app = express();

app.use(express.json());
app.use(manyRouter);
app.use(singleRouter);

app.listen(8080, () => {
  console.log("server run");
});
