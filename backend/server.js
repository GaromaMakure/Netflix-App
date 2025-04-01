import express from "express";
const app = express();
app.get("/api/v1/signup", (req, res) => {
  res.send("signup route");
});

app.get("/api/v1/login", (req, res) => {
  res.send("login route");
});

app.get("/api/v1/logout", (req, res) => {
  res.send("logout route");
});

app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});
