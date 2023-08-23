const connectToMongo = require("./db");
const express = require("express");
const app = express();
const port = 6000;
connectToMongo();

app.use(express.json());

//Available Routes
app.use("/api/auth",require("./routes/auth"));
app.use("/api/notes",require("./routes/notes"));

app.listen(port, () => {
  console.log(`I-Notebook Backend running on port ${port}`);
});
