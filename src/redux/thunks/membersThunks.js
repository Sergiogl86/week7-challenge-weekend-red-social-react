import axios from "axios";
import {
  getMembersAction,
  getProfileAction,
} from "../actions/socialActionCreators";

const urlApi = process.env.REACT_APP_API_URL_USER;

export const showMembersThunk = () => {
  return async (dispatch) => {
    const showMembersUrl = `${urlApi}members`;
    try {
      const token = localStorage.getItem("userToken");
      const { data: members } = await axios.get(showMembersUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(getMembersAction(members));
    } catch (error) {
      return error.response.data;
    }
  };
};

export const getProfileUserThunk = () => {
  return async (dispatch) => {
    const userProfileUrl = `${urlApi}userProfile`;
    try {
      const token = localStorage.getItem("userToken");
      const { data: members } = await axios.get(userProfileUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(getProfileAction(members));
    } catch (error) {
      return error.response.data;
    }
  };
};

export const updateProfileUserThunk = (updateProfile) => {
  const updateProfileUrl = `${urlApi}updateProfile`;
  const sendUser = new FormData();
  sendUser.append("username", updateProfile.username);
  sendUser.append("name", updateProfile.name);
  sendUser.append("password", updateProfile.password);
  sendUser.append("age", updateProfile.age);
  sendUser.append("bio", updateProfile.bio);
  sendUser.append("img", updateProfile.img);
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("userToken");
      const { data: members } = await axios.put(updateProfileUrl, sendUser, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(getProfileAction(members));
    } catch (error) {
      return error;
    }
  };
};
