import { errorMessage, successMessage } from "../config/responseMessage.js";
import Books from "../models/Books.js";
import { z } from "zod";

const bookValidation = z.object({
  title: z.string().min(1).max(100).trim(),
  author: z.string().min(1).trim(),
  price: z.number().min(0),
  category: z.enum([
    "Fiction",
    "Non-Fiction",
    "Science",
    "History",
    "Technology",
  ]),
  page: z.number().min(1).optional(),
});

// 1
export const createBook = async (req, res) => {
  try {
    const { title, author, price, category, page } = req.body;

    // const schemaValiditation = bookValidation.safeParse({
    //   title,
    //   author,
    //   price,
    //   category,
    //   page,
    // });

    // if (!schemaValiditation.success) {
    //   return errorMessage(res, 404, "Pls filled write input");
    // }

    const createBook = await Books.create(req.body);

    return successMessage(res, 201, "Book Created", createBook);
  } catch (err) {
    return errorMessage(res, 400, err.message);
  }
};

// 2
export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Books.find().sort({ createdAt: -1 });

    return successMessage(res, 200, `Book Count ${allBooks.length}`, allBooks);
  } catch (err) {
    return errorMessage(res, 400, err.message);
  }
};

// 3
export const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const getBook = await Books.findById(id);

    if (!getBook) {
      return errorMessage(res, 404, "Book not Found");
    } else return successMessage(res, 200, "Book Found", getBook);
  } catch (err) {
    errorMessage(res, 400, "Some thing went wrong");
  }
};

//4
export const updateBook = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  try {
    const getBook = await Books.findByIdAndUpdate(id, req.body, {
      new: true, // return updated doc, not old one
      runValidators: true, // run schema validators on update
    });

    if (!getBook) {
      return errorMessage(res, 404, "Book not Found");
    } else {
      return successMessage(res, 200, "Book data updated", getBook);
    }
  } catch (err) {
    errorMessage(res, 400, err.message);
  }
};

//5
export const deleteBook = async (req, res) => {
  try {
    console.log(req.params.id);
    const deleteBook = await Books.findByIdAndDelete(req.params.id);

    if (!deleteBook) {
      return errorMessage(res, 404, "Book not deleted");
    } else {
      return successMessage(res, 200, "Book Deleted", deleteBook);
    }
  } catch (err) {
    errorMessage(res, 400, "Some thing went wrong");
  }
};

//6
export const getBooksByCategory = async (req, res) => {
  try {
    const { cat } = req.query;

    console.log(cat);

    const books = await Books.find({ category: cat });

    if (!books) return errorMessage(res, 404, "No books");

    return successMessage(res, 200, "filter book", books);
  } catch (err) {
    errorMessage(res, 400, err.message);
  }
};
