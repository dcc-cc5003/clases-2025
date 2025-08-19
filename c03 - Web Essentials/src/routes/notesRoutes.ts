import { Router } from "express";
import {
  getNotesPage,
  getNotesData,
  saveNewNote,
  resetNotes,
} from "../controllers/notesController";

const router = Router();

router.get("/", getNotesPage);
router.get("/data.json", getNotesData);
router.post("/new", saveNewNote);
router.get("/reset", resetNotes);

export default router;
