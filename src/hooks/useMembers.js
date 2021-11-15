import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  addEnemiesThunk,
  addFriendsThunk,
  getProfileUserThunk,
  showEnemiesThunk,
  showFriendsThunk,
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

  const updateProfileUser = async (profile) => {
    const response = await dispatch(updateProfileUserThunk(profile));
    return response;
  };

  const addFriendsUser = async (friendId) => {
    dispatch(addFriendsThunk(friendId));
  };

  const addEnemiesUser = async (enemieId) => {
    dispatch(addEnemiesThunk(enemieId));
  };

  const showFriendsUser = async () => {
    dispatch(showFriendsThunk());
  };

  const showEnemiesUser = async () => {
    dispatch(showEnemiesThunk());
  };

  return {
    members,
    showMembers,
    addFriendsUser,
    addEnemiesUser,
    getProfileUser,
    showFriendsUser,
    showEnemiesUser,
    updateProfileUser,
  };
};

export default useMembers;
