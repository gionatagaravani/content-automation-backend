import axios from "axios";
import dotenv from 'dotenv'
dotenv.config();

const headers = {
  "Content-Type": "application/json"
};

export const GetInfo = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res
      .status(400)
      .json({ status: "error", message: "token not vaild" });
  }

  axios
    .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`)
    .then((response) => {
      res.status(201).json({message: response});
      res.send;
    })
    .catch((error) => {
      console.error(error.message);
      res.status(404).json({ message: error.message });
    });
};
