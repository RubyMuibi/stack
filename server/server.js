const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const Stack = require("./models/stacks");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

require("dotenv").config();
const dbURI = process.env.MONGODB_URI;
const openaiApiKey = process.env.OPENAI_API_KEY;

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

app.get("/", async (req, res) => {
  try {
    const getAllStack = await Stack.find();
    res.json(getAllStack);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.userMessage;

    const apiURL = "https://api.openai.com/v1/chat/completions";

    const requestData = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: userMessage }],
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey} `,
      },
      body: JSON.stringify(requestData),
    };

    const response = await fetch(apiURL, requestOptions);
    const responseData = await response.json()
    res.json(responseData)
  } 
  
  catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
