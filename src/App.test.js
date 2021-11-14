import server from "../src/test/mocks/server";
import renderWithProviders from "./test/test-utils";
import App from "./App";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  server.listen();
});
beforeEach(() => {
  renderWithProviders(<App />);
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("Given an App component", () => {
  describe("When the user logged a user", () => {
    test("Then it should show Hola username", async () => {
      const loginNavbar = screen.getByTestId("navbar-login");
      userEvent.click(loginNavbar);

      const username = screen.getByTestId("login-username");
      const password = screen.getByTestId("login-password");

      userEvent.type(username, "Sergio_gl");
      userEvent.type(password, "entrar");

      const entrar = screen.getByTestId("login-Entrar");
      userEvent.click(entrar);

      const greeting = await screen.findByText("Hola undefined");

      screen.debug();

      expect(greeting).toBeInTheDocument();
    });
  });
});
