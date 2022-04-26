import express from "express";
import { createUsers, getUsers, updateUser } from "../controller/index.js";
const router = express.Router()

router.post('/', createUsers)
router.get('/', getUsers)
router.patch('/:id', updateUser)

export default router