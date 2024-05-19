import express from "express";
import { PrismaClient } from "@prisma/client";
import { singleRouter } from "./single-fileUpload.js";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use(singleRouter);

app.listen(8080, () => {
  console.log("server run");
});
