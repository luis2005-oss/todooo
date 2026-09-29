import express from "express";
import { tasksRoutes } from "./routes/tasks.routes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// create server
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allowedOrigin =
  process.env.ALLOWED_ORIGIN || `http://localhost:${process.env.PORT || 5173}`;
app.use(
  cors({
    origin: allowedOrigin,
  }),
);

// rutas
app.use("/tasks", tasksRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "TodoAPP" });
});

const PORT = Number(process.env.PORT) || 3000;
// start server
app.listen(PORT, () => {
  console.log(`server on: http://localhost:${PORT}/`);
});
