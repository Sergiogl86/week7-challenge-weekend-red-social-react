import axios from "axios";
import { getMembersAction } from "../actions/socialActionCreators";

const urlApi = process.env.REACT_APP_API_URL_USER;

export const showMembersThunk = () => {
  return async (dispatch) => {
    const showMembersUrl = `${urlApi}members`;
    try {
      debugger;
      const token = localStorage.getItem("userToken");
      const { data: members } = await axios.get(showMembersUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      debugger;
      dispatch(getMembersAction(members));
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
};
