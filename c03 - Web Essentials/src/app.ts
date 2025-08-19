import express from "express";
import mongoose from "mongoose";
import path from "path";
import homeRoutes from "./routes/homeRoutes";
import notesRoutes from "./routes/notesRoutes";
import spaRoutes from "./routes/spaRoutes";

const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/notesdb")
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Registering Routes
app.use("/", homeRoutes);
app.use("/notes", notesRoutes);
app.use("/notes/spa", spaRoutes);

export default app;
