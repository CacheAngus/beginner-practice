import express from "express";
import notesRoutes from "./routes/router.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
const db = connectDB();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json());

const attachDbMiddleware = async function (req, _res, next) {
  req.db = await db;
  next();
};
app.use(attachDbMiddleware);
app.use("/api/notes", notesRoutes);

db.then(() => {
  app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
  });
});
