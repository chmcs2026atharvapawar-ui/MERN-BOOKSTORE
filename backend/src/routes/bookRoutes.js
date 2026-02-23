import express from "express"
import { createBook, deleteBook, getAllBooks, getBookbyID, updateBook } from "../controllers/bookcontroller.js"
const router = express.Router()
router.get("/",getAllBooks)
router.get("/:id",getBookbyID)
router.post("/",createBook)
router.put("/:id",updateBook)
router.delete("/:id",deleteBook)
export default router