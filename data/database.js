import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "prac-002",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};
