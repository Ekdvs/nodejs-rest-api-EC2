import express from "express";
import cors from "cors";
import dotenv, { config } from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./router/userRouter.js";
import { errorHandler } from "./middlewares/errorhandler.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
config();




//routes
app.use("/api/users", userRoutes);

app.use("/api/products", (req, res) => {
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