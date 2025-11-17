import express from "express";

import { viewuser} from "../controllers/userController.js";

const router = express.Router();

router.post("/", viewuser);



export default router;
