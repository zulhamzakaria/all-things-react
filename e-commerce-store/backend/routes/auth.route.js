import express from "express";
import { signin, signout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", await signup);
router.get("/signin", await signin);
router.get("/signout", await signout);

export default router;
