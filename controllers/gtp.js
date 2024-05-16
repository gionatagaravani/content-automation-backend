import axios from "axios";
import dotenv from 'dotenv'
dotenv.config();

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${process.env.GPT_KEY}`,
};

export const Gpt4 = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res
      .status(400)
      .json({ status: "error", message: "prompt not vaild" });
  }

  axios
    .post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: headers,
      }
    )
    .then((response) => {
      console.log(response.data.choices[0].message);
      res.status(201).json({message: response.data.choices[0].message});
      res.send;
    })
    .catch((error) => {
      console.error(error.message);
      res.status(404).json({ message: error.message });
    });
};
