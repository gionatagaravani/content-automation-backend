import axios from "axios";
import dotenv from "dotenv";
import { User } from "../models/users.js";
import { capitalizeFirstLetter } from "../shared/functions.js";
import jwt from "jsonwebtoken";

dotenv.config();

export const Login = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res
      .status(400)
      .json({ status: "error", message: "token not vaild" });
  }

  const info = await GetInfo(token).catch((err) =>
    res.status(404).json({ message: error.message })
  );

  if (!info) {
    return res.status(400).json({ status: "error", message: "Info not found" });
  }

  const email = info.data.email;
  const user = await User.findOne({email});

  if (!user) {
    const user = new User({
      name: capitalizeFirstLetter(info.data.given_name),
      surname: capitalizeFirstLetter(info.data.family_name),
      email: info.data.email,
      image: info.data.picture,
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
  }

  const tok = jwt.sign(
    {
      id: user._id,
      username: email,
    },
    process.env.JWT_SECRECT
  );
  return res.json({ status: "ok", token: tok, data: user });
};

async function GetInfo(token) {
  return axios
    .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`)
    .then((response) => response)
    .catch((error) => {
      console.error(error.message);
      return error;
    });
}
