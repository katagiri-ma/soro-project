// const knex = require("../knex");
// const knex = require("../../index");
const knex = require("../../knexIndex");

const { validProps, requiredProps } = require("../util/validation");
const validateProps = validProps(["id", "description"]);
const validateRequired = requiredProps(["id", "description"]);

const TASK_TABLE = "task";

module.exports = {
  TASK_TABLE,

  // すべてのタスクをgetする
  getAll(limit = 100) {
    return knex
      .select({
        id: "id",
        description: "description",
      })
      .from(TASK_TABLE)
      .limit(limit);
  },

  // 新規タスクの作成
  create(newTask) {
    // バリデーション
    validateRequired(validateProps(newTask));

    // console.log("newTask", newTask);
    return knex.insert(newTask).from(TASK_TABLE);
  },

  // タスクの更新
};
