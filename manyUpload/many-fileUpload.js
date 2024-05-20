import express from "express";
import multer from "multer";

export const manyRouter = express.Router();

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files/");
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

const typeUpload = upload.fields([{ name: "images", maxCount: 3 }]);

manyRouter.post("/user/uploads", typeUpload, async (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.send(error);
  }
});
