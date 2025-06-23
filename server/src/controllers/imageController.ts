import { Request, Response } from "express";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

export const imageController = async (req: Request, res: Response): Promise<void> => {
  const image = req.file as Express.Multer.File | undefined;

  if (!image) {
    res.status(400).json({ error: "No image file provided" });
    return;
  }

  try {
    // Upload the image to Cloudinary
    const imageUrl = await uploadToCloudinary(image.buffer, "lucidai");
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error("Error in imageController:", error);
    res.status(500).json({ error: "Failed to upload image" });
  }
};
