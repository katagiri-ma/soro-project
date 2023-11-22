import axiosClient from "../axios";

const getData = () => {
  console.log("HTTPリクエスト");
  return axiosClient.get("/task");
};

const postData = (data) => {
  console.log("POSTリクエスト");
  // console.log("data", data);
  return axiosClient.post("/task", data);
};

// export default { getData };
export default { getData, postData };
