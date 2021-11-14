import socialActionTypes from "../actions/socialActionTypes";

const membersReducer = (members = [], action) => {
  let newMembers;
  debugger;
  switch (action.type) {
    case socialActionTypes.loadMembers:
      newMembers = [...action.members];
      break;
    case socialActionTypes.loadProfile:
      newMembers = [action.profile];
      break;
    default:
      newMembers = members;
  }

  return newMembers;
};

export default membersReducer;
