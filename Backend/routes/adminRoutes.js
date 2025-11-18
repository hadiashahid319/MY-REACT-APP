import express from "express";
import { createItem } from "../controllers/addItemController.js";

const router = express.Router();

router.post("/add", createItem);

export default router;
