import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/errorhandler.js";
import { connectDB } from "./db/db.js";
import userRouter from "./router/userRouter.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
dotenv.config();




//routes
app.use("/api/users", userRouter);

app.use("/api/products", (req, res) => {
  return res.status(200).json({
    message: "This is new feature change, a new route for products samin",
  });
});
app.use("/api/add", (req, res) => {
  return res.status(200).json({
    message: "This is new feature change, a new route for products samin",
  });
});

//error handler
app.use(errorHandler);

//connect to the database
//listen to the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});