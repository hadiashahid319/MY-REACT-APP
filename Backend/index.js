import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; 
import mongoose from "mongoose";

import register from "./routes/registerUser.js";
import rating from "./routes/ratingRoutes.js";
import adminadd from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();


const url = "mongodb+srv://hadia:hAdia.13@cluster0.shlye8p.mongodb.net/";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"));


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ⭐ ROUTES
app.use("/login", userRoutes);
app.post('/login',(req, res) => {
  try {
    const { email, password } = req.body;

    console.log("📩 Login data received:");
    console.log("Email:", email);
    console.log("Password:", password);

    res.json({ message: "Login successful!" });

  } catch (error) {
    console.error("Error:", error);
  }
})
app.use("/register", register);
app.post('/register',(req, res) => {
  try {
    console.log("✅ Registration Data Received:");
    console.log(req.body);  // 👈 Sab data ek saath print hoga

    res.send("Registration data received successfully");
  } catch (error) {
    console.error("Error:", error);
    res.send("Server error");
  }
})
app.use("/rating", rating);
app.post('/rating',(req, res) => {
  try {
    const { userName, itemName, rating, comment } = req.body;

    console.log("✅ New Rating Submitted:");
    console.log("User:", userName);
    console.log("Item:", itemName);
    console.log("Stars:", rating);
    console.log("Comment:", comment || "No comment");

 
  } catch (error) {
    console.error("Error:", error);

  }
})
app.use("/admin", adminadd);
app.post('/additem',(req, res) => {
  const itemData = req.body;

  console.log("Received item from frontend:", itemData);})

  
app.post("/clicked", (req, res) => {
  console.log("Clicked data received:", req.body);
  res.status(200).send({ message: "Received!" });
});


// POST /delete – behaves like /clicked
app.post("/delete", (req, res) => {
  const item = req.body; // receive full item object
  console.log("Deleted item received:", item); // log in backend console
  res.status(200).json({ message: "Item deleted successfully" });
});



app.post("/update", (req, res) => {
  console.log("Updated item data received:", req.body);
  res.json({ message: "Item updated successfully!" });
});



// ----- Start Server -----
app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
