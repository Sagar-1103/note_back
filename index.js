const connectToMongo = require("./db");
const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const cors = require("cors");
connectToMongo();

app.use(cors());
app.use(express.json());

//Available Routes
app.use("/api/auth",require("./routes/auth"));
app.use("/api/notes",require("./routes/notes"));

app.listen(port, () => {
  console.log(`I-Notebook Backend running on port ${port}`);
});
