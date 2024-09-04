import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("signup route called");
});
router.get("/signin", (req, res) => {
  res.send("signin route called");
});
router.get("/signout", (req, res) => {
  res.send("signout route called");
});

export default router;
