import { Router } from "express";
import { getHomePage } from "../controllers/homeController";

const router = Router();

router.get("/", getHomePage);

export default router;
