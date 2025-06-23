import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRouter from "./routes/chatRouter";
import imageRouter from "./routes/imageRouter";

// app config
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("Hello World! Server is working.");
});

app.use("/chat", chatRouter);
app.use("/image", imageRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
