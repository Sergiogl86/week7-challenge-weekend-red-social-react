import socialActionTypes from "../actions/socialActionTypes";

const membersReducer = (members = [], action) => {
  let newMembers;
  debugger;

  switch (action.type) {
    case socialActionTypes.loadMembers:
      newMembers = [...action.members];
      break;
    default:
      newMembers = members;
  }

  return newMembers;
};

export default membersReducer;
