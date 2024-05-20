import express from "express";
import { manyUpload } from "./many-upload.js";
export const manyRouter = express.Router();

const typeUpload = manyUpload.fields([{ name: "file", maxCount: 3 }]);
const typeUploads = manyRouter.post(
  "/user/uploads",
  typeUpload,
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
