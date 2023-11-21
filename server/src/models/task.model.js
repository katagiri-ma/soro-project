const knex = require("../knex");

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

  // 新規注文の作成
  create(newTask) {
    // お試しバリデーション
    validateRequired(validateProps(newTask));
    // return knex.insert(customer, customer.id).from(CUSTOMER_TABLE);
    // { id: 1, description: "買い物" },
    console.log("newTask", newTask);
    // return knex.insert(id, description).from(TASK_TABLE);
    return knex.insert(newTask).from(TASK_TABLE);
  },

  // タスクの更新
};

// 新規注文の作成
// insertinto
