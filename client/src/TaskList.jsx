import { useState, useEffect } from "react";
// import { index } from "../../server/src/controllers/task.controller";

function TaskList({ list, setList, task }) {
  console.log(task);

  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {task !== undefined &&
          task.map((desc, i) => {
            return <li key={i}>{desc}</li>;
          })}
      </ul>
      {/* <Task /> */}
    </>
  );
}

export default TaskList;
