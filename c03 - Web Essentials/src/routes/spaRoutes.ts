import { Router } from "express";
import {
  getNotesPage,
  getNotesData,
  saveNewNote,
} from "../controllers/spaController";

const router = Router();

router.get("/", getNotesPage);
router.get("/data.json", getNotesData);
router.post("/new", saveNewNote);

export default router;
