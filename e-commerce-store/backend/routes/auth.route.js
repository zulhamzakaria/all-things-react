import express from "express";
import { signin, signout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", await signup);
router.post("/signin", await signin);
router.post("/signout", await signout);

export default router;
