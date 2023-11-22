const taskModule = require("../models/task.model");

const index = async (req, res) => {
  console.log("index");
  const taskes = await taskModule.getAll();
  console.log("dddddd", taskes);
  res.send(taskes);
};

// 追加post
const save = async (req, res) => {
  console.log("save");
  const addDate = await taskModule.create(req.body);
  console.log("req.body", req.body);
  res.send(addDate);
};

module.exports = { index, save };
