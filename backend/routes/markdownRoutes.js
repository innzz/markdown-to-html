import express from "express";
import { convertMarkdownToHtml } from "../controllers/markdownController.js";

const router = express.Router();

router.route("/convert/html").post(convertMarkdownToHtml);

export default router;
