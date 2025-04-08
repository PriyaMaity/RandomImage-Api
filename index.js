const express = require("express");
const app = express();
const PORT = 6060;

app.get("/", (req, res) => {
  res.send("Welcome to the Random Image API!");
});

app.get("/api/image/random", (req, res) => {
  try {
    const imageUrl = "https://picsum.photos/400";
    res.redirect(imageUrl);
  } catch (err) {
    console.log(err, "Error While Fetchind data");
    res.status(500).json({ error: "Failed to fetch image" });
  }
});
app.listen(PORT, (err) => {
  if (err) {
    console.log(err, `Error in listening to port : ${PORT}`);
  }
  console.log(`Listening to port : ${PORT}`);
});
