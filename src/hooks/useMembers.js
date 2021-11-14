import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { showMembersThunk } from "./../redux/thunks/membersThunks";

const useMembers = () => {
  const members = useSelector((store) => store.members);

  const dispatch = useDispatch();

  const showMembers = useCallback(() => {
    debugger;
    dispatch(showMembersThunk());
  }, [dispatch]);

  return {
    members,
    showMembers,
  };
};

export default useMembers;
