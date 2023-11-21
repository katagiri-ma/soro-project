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

  // 機能をしっかり分けよう
  // パターン１：getDataは初回マウント時に発火→listタグに反映
  // パターン２：ボタンの押下でset→listタグ量産の流れ
  useEffect(() => {
    getData();
    console.log(task);

    // makeList関数をuseEffectの外で作るといいかも！ボタン押下時にも使えそう
    // const makeList = task.map(t => '${t}')
  }, []);
  // });

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
