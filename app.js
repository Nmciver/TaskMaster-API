const express = require("express");
const _ = require("lodash");

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "TaskMaster API is running",
    status: "ok"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`TaskMaster API listening on port ${PORT}`);
});