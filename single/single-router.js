import express from "express";
import { SingleUpload } from "./singleUpload.js";
import { resizeFile, singleUploadResize } from "./singleUploadResize.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// import sharp from "sharp";

const singleRouter = express.Router();

// Single Upload
singleRouter.post(
  "/user/upload",
  SingleUpload.single("file"),
  async (req, res, next) => {
    try {
      res.json({
        status: "success",
      });
    } catch (error) {
      res.send(error);
    }
  }
);

singleRouter.post(
  "/user/upload/db",
  SingleUpload.single("file"),
  async (req, res, next) => {
    try {
      const user = await prisma.user.create({
        data: {
          image: req.file.filename,
          name: "test",
        },
      });
      res.status(200).json({
        data: "success",
      });
    } catch (error) {
      res.send(error);
    }
  }
);

// Single Upload Resize Image
singleRouter.post(
  "/user/upload/resize",
  singleUploadResize.single("file"),
  resizeFile,
  async (req, res, next) => {
    try {
      res.status(200).json({
        status: "success",
      });
    } catch (error) {
      res.send(error);
    }
  }
);

export { singleRouter };
