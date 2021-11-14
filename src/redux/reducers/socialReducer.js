import socialActionTypes from "../actions/socialActionTypes";

const socialReducer = (members = [], action) => {
  let newMembers;

  switch (action.type) {
    case socialActionTypes.loadMembers:
      newMembers = [...action.members];
      break;
    default:
      newMembers = members;
  }

  return newMembers;
};

export default socialReducer;
