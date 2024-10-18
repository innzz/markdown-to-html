import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Helloworld");
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
