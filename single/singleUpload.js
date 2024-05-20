import multer from "multer";

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

export const SingleUpload = multer({
  storage: multerStorage,
  fileFilter: filter,
});
