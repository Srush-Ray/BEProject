import axios from "axios";

export const sendVideo = async (data) => {
  console.log(data);
  return await axios
    .post("http://localhost:4004/firstpipeline/sendVideo", data)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
