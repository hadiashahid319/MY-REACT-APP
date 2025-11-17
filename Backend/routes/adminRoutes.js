import express from "express";
import { addItem } from "../controllers/addItemController.js";

const router = express.Router();

router.post("/", addItem);

export default router;
