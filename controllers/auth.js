import { User } from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, surname, email, password } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ status: "error", message: "email not vaild" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ status: "error", message: "password not vaild" });
  }

  if (password.length < 7) {
    return res.status(400).json({
      status: "error",
      message: "password must be at least 8 characters",
    });
  }

  const hashPsw = await bcrypt.hash(password, 10);
  const user = new User({
    name: name,
    surname: surname,
    email: email,
    password: hashPsw,
  });

  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const registerLog = async (req, res) => {
  const { name, surname, email, password } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ status: "error", message: "email not vaild" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ status: "error", message: "password not vaild" });
  }

  if (password.length < 7) {
    return res.status(400).json({
      status: "error",
      message: "password must be at least 8 characters",
    });
  }

  const hashPsw = await bcrypt.hash(password, 10);
  const user = new User({
    name: name,
    surname: surname,
    email: email,
    password: hashPsw,
  });

  try {
    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
        username: email,
      },
      process.env.JWT_SECRECT
    );

    res.status(201).json({ status: "ok", token: token, data: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(400)
      .json({ status: "error", message: "email or password not found" });
  }

  if (bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        username: email,
      },
      process.env.JWT_SECRECT
    );
    return res.json({ status: "ok", token: token, data: user });
  }

  res
    .send(401)
    .json({ status: "error", message: "email or password not found" });
};
