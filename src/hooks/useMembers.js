import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  getProfileUserThunk,
  showMembersThunk,
  updateProfileUserThunk,
} from "./../redux/thunks/membersThunks";

const useMembers = () => {
  const members = useSelector((store) => store.members);

  const dispatch = useDispatch();

  const showMembers = useCallback(() => {
    dispatch(showMembersThunk());
  }, [dispatch]);

  const getProfileUser = useCallback(() => {
    dispatch(getProfileUserThunk());
  }, [dispatch]);

  const updateProfileUser = (profile) => {
    const response = dispatch(updateProfileUserThunk(profile));
    return response;
  };

  return {
    members,
    showMembers,
    getProfileUser,
    updateProfileUser,
  };
};

export default useMembers;
