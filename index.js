const express = require("express");
const app = express();
const mongoose = require("mongoose");
const posts = require("./routes/posts");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", posts);

app.get("/", (req, res) => {
  res.json({ message: "Main route..." });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);

  try {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected...`);
  } catch (e) {
    console.log(e.message);
  }
});
