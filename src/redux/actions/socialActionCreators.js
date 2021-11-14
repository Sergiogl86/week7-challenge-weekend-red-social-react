import socialActionTypes from "./socialActionTypes";

export const getMembersAction = (members) => ({
  type: socialActionTypes.loadMembers,
  members,
});
