const express = require("express");
const router = express.Router();
const BooksController = require('../controllers/books.controllers');
const checkAuth = require('../middleware/check-auth');

router.get("/",checkAuth, BooksController.getAll);
router.post("/add",checkAuth,BooksController.addBook);
router.delete("/:_id",checkAuth, BooksController.deleteBook);
 router.get("0/:_id",checkAuth,BooksController.getSingleBook);
router.put("/:_id",checkAuth, BooksController.updateBook);



module.exports = router;