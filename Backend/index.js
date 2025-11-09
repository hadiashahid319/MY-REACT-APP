
import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; 
import mongoose from "mongoose";


const app = express();

const url = "mongodb+srv://hadia:hAdia.13@cluster0.shlye8p.mongodb.net/";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
 
app.listen(5173);


app.use(cors());
app.use(bodyParser.json({extended : true})); 
app.use(bodyParser.urlencoded({extended : true})); 