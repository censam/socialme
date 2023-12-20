import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register User
export const register = async (req, res) => {
 try {
  console.log("register");
  const {
   firstName,
   lastName,
   email,
   password,
   picture,
   friends,
   location,
   occupation,
  } = req.body;

  const salt = await bcrypt.genSalt(password);
  const passwordHash = bcrypt.hash(salt, hash);

  const newUser = new User({
   firstName,
   lastName,
   email,
   password: passwordHash,
   picture,
   friends,
   location,
   occupation,
   viewedProfile: Math.floor(Math.random() * 1000),
   impressions: Math.floor(Math.random() * 1000),
  });

  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
 } catch (error) {
  console.log(error, "Error saving");
  res.status(500).json({ error: error.message });
 }
};

export const login = async (req, res) => {
 try {
  console.log(req);
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
   res.status(404).json({ message: "User does not exist." });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
   res.status(401).json({ message: "Invalid Credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  delete user.password;
  res.status(200).json({ token, user });
 } catch (error) {
  res.status(500).json({ error: error.message });
 }
};
