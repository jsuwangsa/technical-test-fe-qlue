import axios from "axios";

export const login = (email, password) => {
  const token = "-";
  const data = {
    email,
    password,
    fcm_token: token,
  };
  return axios({
    method: "POST",
    url: "https://ayodhya-dev.qlue.id/api/auths/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
};
