import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import markdownRoutes from "./routes/markdownRoutes.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/markdown", markdownRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
