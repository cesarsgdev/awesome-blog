const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Main route..." });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
