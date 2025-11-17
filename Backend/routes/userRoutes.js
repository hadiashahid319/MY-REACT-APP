import express from "express";
import { viewuser } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", (req, res) => {
  console.log("📩 Data received from frontend:", req.body);

  res.json({ message: "Login API hit!" });
});

export default router;
