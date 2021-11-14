import socialActionTypes from "./socialActionTypes";

export const getMembersAction = (members) => ({
  type: socialActionTypes.loadMembers,
  members,
});

export const getProfileAction = (profile) => ({
  type: socialActionTypes.loadProfile,
  profile,
});
