const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api", (req, res) => {
  const number = parseInt(req.query.number);

  //Validation to check if the input is a valid integer or not
  if (isNaN(number)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide a valid integer." });
  }

  let result = number.toString();

  if (number % 5 === 0) {
    result = "L";
  }

  if (number % 7 === 0) {
    result = result === "L" ? "LR" : "R";
  }

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
