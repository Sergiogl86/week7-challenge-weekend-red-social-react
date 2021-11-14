import {
  loginUserAction,
  logOutUserAction,
} from "./../actions/userActionCreators";
import userReducer from "./userReducer";

describe("Given a userReducer reducer", () => {
  describe("When it receives a non logged user an login action with a user", () => {
    test("Then it should return a new user state with the logged user", () => {
      const nonLoggedUser = {
        autorizado: false,
        user: {},
      };

      const loggedUser = {
        id: "618fae88a9bf0fe777419015",
        username: "Sergio_gl",
        iat: 1636881920,
        exp: 1636968320,
      };

      const userStateExpected = {
        autorizado: true,
        user: {
          id: "618fae88a9bf0fe777419015",
          username: "Sergio_gl",
          iat: 1636881920,
          exp: 1636968320,
        },
      };

      const action = loginUserAction(loggedUser);

      const newUserState = userReducer(nonLoggedUser, action);

      expect(newUserState).toEqual(userStateExpected);
    });
  });
  describe("When it receives a logged user an logout action", () => {
    test("Then it should return a new user state with empty user data", () => {
      const loggedUser = {
        id: "618fae88a9bf0fe777419015",
        username: "Sergio_gl",
        iat: 1636881920,
        exp: 1636968320,
      };

      const userStateExpected = {
        autorizado: false,
        user: {},
      };

      const action = logOutUserAction();

      const newUserState = userReducer(loggedUser, action);

      expect(newUserState).toEqual(userStateExpected);
    });
  });
});
