import axios from "axios";
import { loginUserAction } from "../actions/userActionCreators";

import jwtDecode from "jwt-decode";

const urlApi = process.env.REACT_APP_API_URL_USER;

export const loginUserThunk = (userLogin) => {
  return async (dispatch) => {
    const loginUrl = `${urlApi}login`;
    try {
      const { data: user } = await axios.post(loginUrl, userLogin);
      if (user.error) {
      } else {
        localStorage.setItem("userToken", user.token);
        const userData = jwtDecode(user.token);
        dispatch(loginUserAction(userData));
      }
    } catch (error) {
      return error.response.data;
    }
  };
};

export const registerUserThunk = (userRegister) => {
  return async (dispatch) => {
    const loginUrl = `${urlApi}register`;
    const sendUser = new FormData();
    sendUser.append("username", userRegister.username);
    sendUser.append("name", userRegister.name);
    sendUser.append("password", userRegister.password);
    sendUser.append("age", userRegister.age);
    sendUser.append("bio", userRegister.bio);
    sendUser.append("img", userRegister.img);
    try {
      await axios.post(loginUrl, sendUser);
    } catch (error) {
      return error.response.data;
    }
  };
};
