import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);

  if (!token)
    return res.status(404).json({
      sucess: false,
      message: "Login first",
    });
  const decoded = jwt.verify(token, process.env.JWT_SCRET);

  req.user = await User.findById(decoded._id);

  next();
};
