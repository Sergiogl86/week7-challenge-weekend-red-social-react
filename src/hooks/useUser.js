import { useDispatch, useSelector } from "react-redux";
import { logOutUserAction } from "../redux/actions/userActionCreators";
import { loginUserThunk, registerUserThunk } from "../redux/thunks/userThunks";
import { useCallback } from "react";
import { checkTokenThunk } from "./../redux/thunks/membersThunks";

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
      dispatch(checkTokenThunk());
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
