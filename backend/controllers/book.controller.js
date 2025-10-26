const BookModel = require("../models/Book.model");
exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await BookModel.find({});

    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
