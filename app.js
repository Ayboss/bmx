const express = require("express");

const app = express();

app.get("*", (req, res) => {
  return res.status(200).json({
    message: "success",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("APP is listening on port", PORT);
});
