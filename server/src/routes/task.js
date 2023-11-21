const router = require("express").Router();
const taskController = require("../controllers/task.controller");
// taskController = {
//   index:async(req,res)...,
//   edit:async(req,res)...,
//   deleate:async(req,res)...,
// }
// api/main
// const express = require("express");
// const app = express();
// app.use(express.json());
// const bodyParser = require('body-parser');

router.get("/", taskController.index);

// post
router.post("/", taskController.save);
// router.post("/", async (req, res) => {
//   console.log(req.body);
//   //   res.send(console.log("aaaaaaaaa"));
//   //DBにreq.bodyを追加したい
//   res.send(req.body);
// });

module.exports = router;
