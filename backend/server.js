const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("NeoVault Backend Running");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
