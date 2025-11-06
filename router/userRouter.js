import express from "express";
import { createNewUser, getAllUsers } from "../controllers/userController.js";


const router = express.Router();

// create a user
router.post("/", createNewUser);
// get all users
router.get("/", getAllUsers);

module.exports = router;