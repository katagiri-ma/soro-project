import { useState, useRef } from "react";
// import axios from "axios";
// import axiosClient from "../axios";

function AddTask({ getData, setTask, task, api }) {
  //   const [text, setText] = useState([]);
  //   const [singleTask, setSingleTask] = useState();
  console.log("api", api);
  const inputRef = useRef(null);
  const textUp = () => {
    task !== undefined && setTask([...task, inputRef.current.value]);

    api.postData({ id: task.length + 1, description: inputRef.current.value });
    console.log("input", inputRef.current.value);
  };

  return (
    <>
      <h1>Tasker</h1>
      <input type="text" ref={inputRef} />
      <button type="submit" onClick={textUp}>
        AddTask
      </button>
    </>
  );
}

export default AddTask;
