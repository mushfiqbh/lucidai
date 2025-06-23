import express from "express";
import multer from "multer";
import { imageController } from "../controllers/imageController";

const imageRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

imageRouter.post("/", upload.single("image"), imageController);

export default imageRouter;
