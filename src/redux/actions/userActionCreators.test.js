import { loginUserAction, logOutUserAction } from "./userActionCreators";
import userActionTypes from "./userActionTypes";

describe("Given a login User Action", () => {
  describe("When it receives a logged user", () => {
    test("Then it should return a login Action with the user received", () => {
      const user = {
        id: "618fae88a9bf0fe777419015",
        username: "Sergio_gl",
        iat: 1636880445,
        exp: 1636966845,
      };
      const expectedAction = {
        type: userActionTypes.loginUser,
        user: user,
      };

      const actionResult = loginUserAction(user);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a logOut User Action", () => {
  describe("When it receives a logOut action", () => {
    test("Then it should return a logOut Action", () => {
      const expectedAction = {
        type: userActionTypes.logoutUser,
      };

      const actionResult = logOutUserAction();

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
