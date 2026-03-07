import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  getBooksByCategory,
  updateBook,
} from "../controller/controller.js";

const routes = express.Router();

routes.post("/", createBook);
routes.get("/", getAllBooks);
routes.get("/category", getBooksByCategory); // ← must be BEFORE /:id
routes.get("/:id", getBookById);
routes.put("/:id", updateBook);
routes.delete("/:id", deleteBook);

export default routes;
