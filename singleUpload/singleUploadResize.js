import multer from "multer";
import sharp from "sharp";

const multerStorage = multer.memoryStorage();

export const resizeFile = (req, res, next) => {
  if (!req.file) {
    throw new Error("No input file");
  }
  req.file.filename = `user-image-${Date.now()}.jpeg`;
  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .toFile(`file/${req.file.filename}`);
  next();
};

export const singleUploadResize = multer({ storage: multerStorage });
