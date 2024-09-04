import User from "../models/user.model.js";

export const signup = async (_req, res) => {
  const { email, password, name } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  const user = await User.create({ name, email, password });
  res.status(201).json({ user, message: "User created successfully" });
};
export const signin = async (_req, res) => {
  res.send("sign-in endpoint called");
};
export const signout = async (_req, res) => {
  res.send("signout endpoint called");
};
