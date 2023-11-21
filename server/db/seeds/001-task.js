/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("task").del();
  await knex("task").insert([
    { id: 1, description: "買い物" },
    { id: 2, description: "洗濯" },
    { id: 3, description: "掃除" },
  ]);
};
