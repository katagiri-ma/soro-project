import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import api from "./controllers/task.controller";
import AddTask from "./AddTask";
import TaskList from "./Tasklist"; //なぜかLが小文字じゃないと怒られる

function App() {
  const [task, setTask] = useState();
  const [list, setList] = useState();

  // 機能を分ける
  // パターン１：getDataは初回マウント時に発火→listタグに反映
  // パターン２：ボタンの押下でset→listタグ量産の流れ
  useEffect(() => {
    getData();
    console.log(task);
  }, []);

  const getData = async () => {
    const taskTable = await api.getData();
    // console.log(taskTable.data, "task");
    const taskArray = await taskTable.data.map((e) => e.description);
    setTask(taskArray);
    console.log(taskArray);
  };

  return (
    <>
      <AddTask getData={getData} setTask={setTask} task={task} api={api} />
      <TaskList list={list} setList={setList} task={task} />
    </>
  );
}

export default App;
