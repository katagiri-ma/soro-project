const express = require("express");
const app = express();
const cors = require("cors");
const taskRoute = require("./src/routes/task");
const authRoute = require("./src/routes/auth");

// bodyがgetできる
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const taskController = require("./src/controllers/task.controller");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// app.use(express.join());
// app.use('/main', (req, res) => {
//   res.send('main page');
// });
// mainRouteを呼び出して、実行する　mainのエンドポイント設定
app.use("/api/task", taskRoute);
app.use("/api/auth", authRoute);

// // 動作確認
app.get("/", (req, res) => {
  res.send("Hello express");
});

// app.get("/", (req, res) => {
//   res.render("api/task/index");
// });
// app.get("/", (req, res) => {
//   res.send("Hello express");
// });
// app.get("/api/task", taskController.index);

app.listen(PORT, () => {
  console.log("http://localhost:3000/");
});
