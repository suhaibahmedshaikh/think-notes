import express from "express";
import cors from "cors";
import notesRouter from "./routes/notes.route.js";
import rateLimiter from "./middlewares/rateLimiter.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

// routes
app.use("/api/notes", notesRouter);

// health check route
app.get("/", (req, res) => {
  res.send("Note Api is running");
});

export default app;
