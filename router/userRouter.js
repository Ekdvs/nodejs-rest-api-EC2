import express from "express";
import { createNewUser, getAllUsers } from "../controllers/userController.js";


const userRouter = express.Router();

// create a user
userRouter.post("/", createNewUser);
// get all users
userRouter.get("/", getAllUsers);

export default userRouter;