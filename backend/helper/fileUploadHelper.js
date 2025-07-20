const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const uploadDir = path.join(__dirname, "../storage/uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueID = uuidv4();
    const extension = path.extname(file.originalname);
    const filename = `${uniqueID}${extension}`;
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = /mp4|mov|avi|mkv|webm/;
  const allowedMimeTypes = /video\/.*/;

  const extOk = allowedExtensions.test(
    path.extname(file.originalname).toLowerCase().replace(".", "")
  );
  const mimeOk = allowedMimeTypes.test(file.mimetype);

  if (extOk && mimeOk) {
    cb(null, true);
  } else {
    cb(new Error("Only video files allowed (MP4, MOV, AVI, MKV, WEBM)"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 50 * 1024 * 1024 },
});

module.exports = upload;
