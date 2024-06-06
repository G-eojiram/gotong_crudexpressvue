import express from "express";

import {
    showLists,
    showListByID,
    createStudent,
    updateStudentByID,
    deleteStudentByID,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", showLists); // to get all students
router.get("/student/:id", showListByID); // to get student by id
router.post("/new", createStudent); // to create new student
router.put("/student/:id", updateStudentByID); //to update student by id
router.delete("/student/:id", deleteStudentByID); //to delete student by id

export default router;