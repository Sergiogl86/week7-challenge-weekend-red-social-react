import socialActionTypes from "./socialActionTypes";

export const leerRobotsAction = (members) => ({
  type: socialActionTypes.loadMembers,
  members,
});
