import axios from "axios";
import {
  getMembersAction,
  getProfileAction,
} from "../actions/socialActionCreators";
import { loginUserAction } from "../actions/userActionCreators";

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
      const { data: member } = await axios.get(userProfileUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(getProfileAction(member));
      dispatch(loginUserAction(member));
    } catch (error) {
      return error.response.data;
    }
  };
};

export const checkTokenThunk = () => {
  return async (dispatch) => {
    const userProfileUrl = `${urlApi}userProfile`;
    try {
      const token = localStorage.getItem("userToken");
      const { data: member } = await axios.get(userProfileUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(loginUserAction(member));
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
      return error.message;
    }
  };
};

export const addFriendsThunk = (friendId) => {
  const addFriendsUrl = `${urlApi}friends`;
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("userToken");
      const { data: friends } = await axios.put(
        addFriendsUrl,
        {
          friendId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(loginUserAction(friends));
    } catch (error) {
      return error.message;
    }
  };
};

export const addEnemiesThunk = (enemieId) => {
  const addEnemiesUrl = `${urlApi}enemies`;
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("userToken");
      const { data: enemies } = await axios.put(
        addEnemiesUrl,
        {
          enemieId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(loginUserAction(enemies));
    } catch (error) {
      return error.message;
    }
  };
};

export const showFriendsThunk = () => {
  return async (dispatch) => {
    const showFriendsUrl = `${urlApi}friends`;
    try {
      const token = localStorage.getItem("userToken");
      const { data: friends } = await axios.get(showFriendsUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(getMembersAction(friends));
    } catch (error) {
      return error.response.data;
    }
  };
};

export const showEnemiesThunk = () => {
  return async (dispatch) => {
    const showEnemiesUrl = `${urlApi}enemies`;
    try {
      const token = localStorage.getItem("userToken");
      const { data: friends } = await axios.get(showEnemiesUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(getMembersAction(friends));
    } catch (error) {
      return error.response.data;
    }
  };
};
