import express from "express";
import multer from "multer";
// import sharp from "sharp";

const singleRouter = express.Router();

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "file/");
  },
  filename: (req, res, cb) => {
    cb(null, `user-file-${Date.now()}.jpeg`);
  },
});

const filter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(console.error("you cant upload file except type image"), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: filter });

singleRouter.post(
  "/user/upload",
  upload.single("file"),
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

export { singleRouter };
