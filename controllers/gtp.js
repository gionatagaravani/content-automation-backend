import axios from "axios";

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
      console.log(response.data);
      res.status(404).json(response);
      res.send;
    })
    .catch((error) => {
      console.error(error);
      res.status(404).json({ message: error.message });
    });
};
