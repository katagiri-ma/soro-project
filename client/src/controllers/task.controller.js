import axiosClient from "../axios";

const getData = () => {
  console.log("HTTPリクエスト");
  return axiosClient.get("/task");
};

const postData = (data) => {
  console.log("POSTリクエスト");
  // 変数を作って引数から代入できるようにする？
  // let obj = data
  // return axiosClient.post("/task", { id: "", description: "" });
  console.log("data", data);
  return axiosClient.post("/task", data);
};

// export default { getData };
export default { getData, postData };
