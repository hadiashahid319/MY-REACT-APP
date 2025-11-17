import express, { application } from "express";
import cors from "cors";
import bodyParser from "body-parser"; 
import mongoose from "mongoose";
import { registerUser, viewuser } from "./controllers/userController.js";
import userRoutes from "./routes/userRoutes.js"
import register from "./routes/registerUser.js"
import rating from "./routes/ratingRoutes.js"
import adminadd from "./routes/adminRoutes.js"
const app = express();

// ----- Database Connection -----
const url = "mongodb+srv://hadia:hAdia.13@cluster0.shlye8p.mongodb.net/";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"));

// ----- Middlewares -----
app.use(cors());
app.use(bodyParser.json({ extended: true })); 
app.use(bodyParser.urlencoded({ extended: true }));

// ⭐ REGISTER ROUTES
app.use("/login", userRoutes);
app.use("/register", register);
app.use("/rating", rating); 
app.use("/admin", adminadd);
// ----- Start Server -----
app.listen(5000, () => {
  console.log("Backend running on port 5173");
});
