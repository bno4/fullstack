const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = 5000;

// connect database
connectDB();

const app = express();

// Authorisation CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Middleware qui traite les données de la request

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));
// lance le serveur
app.listen(port, () => console.log("le serveur a démarré au port " + port));
