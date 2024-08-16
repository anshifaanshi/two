import express from 'express';
const router = express.Router();
import { createBook, deleteOne, getAllBooks, getById, updateOne } from '../controllers/controller.js';

// Define the routes without the /books prefix
router.post('/books', createBook);
router.get('/', getAllBooks);
router.get('/books/:id', getById);
router.put('/books/:id', updateOne);
router.delete('/books/:id', deleteOne);

export default router;
