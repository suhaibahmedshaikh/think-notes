import express from "express";
import cors from "cors";
import notesRouter from "./routes/notes.route.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import path from "path";
import { NODE_ENV } from "./configs/envConfig.js";

const app = express();
const __dirname = path.resolve();

// middlewares
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

// routes
app.use("/api/notes", notesRouter);

if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/:any", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// health check route
// app.get("/", (req, res) => {
//   res.send("Note Api is running");
// });

export default app;
