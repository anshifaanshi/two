import { Book } from '../models/models.js';

export const createBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishyear) {
      return res.status(400).send({ message: "Fill all required fields" });
    } else {
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishyear: req.body.publishyear
      };
      const aBook = await Book.create(newBook);
      return res.status(201).send(aBook); // 201 Created
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).send(books); // 200 OK
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send(book); // 200 OK
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

export const updateOne = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    } else {
      return res.status(200).send({ message: "Book updated successfully", book }); // 200 OK
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

export const deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    } else {
      return res.status(200).send({ message: "Book deleted successfully" }); // 200 OK
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};
