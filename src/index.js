import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("<h1>Hello Slyder</h1>");
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!!!", error);
  });
