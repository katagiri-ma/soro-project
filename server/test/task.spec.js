const { expect, assert } = require("chai");
const config = require("../knexfile");
const knex = require("knex")(config);

const fixtures = require("./fixtures");
const taskModel = require("../src/models/task.model");
const TASK_TABLE = taskModel.TASK_TABLE;

describe("task", () => {
  const taskFixture = fixtures.getTask();

  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });

    it("has run the initial migration", () => {
      knex(TASK_TABLE)
        .select()
        .catch(() => assert.fail("task table is not found."));
    });
  });

  describe("getAll", () => {
    it("should return an array of products", async () => {
      const task = await taskModel.getAll();
      expect(task).to.be.an.instanceof(Array);
    });

    it("should accept a limit argument", async () => {
      const products = await taskModel.getAll(3);
      expect(products.length).to.be.at.most(3);
    });
  });

  describe("create", () => {
    const newId = 9999;

    after(async () => {
      await knex.from(TASK_TABLE).where("id", newId).del().catch(console.error);

      console.log("Deleted test task");
    });

    it("should be able to create a new task", async () => {
      const newTask = {
        id: newId,
        description: "Game!",
      };

      const id = await taskModel.create(newTask);
      const task = await knex(TASK_TABLE).select().where("id", newId).first();
      expect(task).to.exist;
      expect(task.id).to.eq(newId);
    });
  });

  describe("with invalid parameters", () => {
    it("should throw an error", () => {
      assert.throws(() => {
        taskModel.create({
          bad_param: "HELLO!",
        });
      }, "Invalid field: bad_param");
    });
  });
});
