import { useDispatch, useSelector } from "react-redux";
import {
  loginUserAction,
  logOutUserAction,
} from "../redux/actions/userActionCreators";
import { loginUserThunk, registerUserThunk } from "../redux/thunks/userThunks";
import jwtDecode from "jwt-decode";
import { useCallback } from "react";

const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const loginUser = async (user) => {
    const response = await dispatch(loginUserThunk(user));
    return response;
  };

  const registerUser = async (user) => {
    const response = await dispatch(registerUserThunk(user));
    return response;
  };

  const logoutUser = () => {
    dispatch(logOutUserAction());
    localStorage.removeItem("userToken");
  };

  const checkToken = useCallback(() => {
    if (localStorage.getItem("userToken")) {
      const token = localStorage.getItem("userToken");
      const userData = jwtDecode(token);
      dispatch(loginUserAction(userData));
    }
  }, [dispatch]);

  return {
    user,
    loginUser,
    logoutUser,
    checkToken,
    registerUser,
  };
};

export default useUser;
