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
  describe("When the user register and logged a user and click on Social Network", () => {
    test.only("Then it should show a list of members", async () => {
      const registerNavbar = await screen.findByTestId("navbar-register");
      userEvent.click(registerNavbar);

      const registerUsername = await screen.findByTestId("register-username");
      const registerName = await screen.findByTestId("register-name");
      const registerPassword = await screen.findByTestId("register-password");
      const registerAge = await screen.findByTestId("register-age");
      const registerBio = await screen.findByTestId("register-bio");

      userEvent.type(registerUsername, "Calimero");
      userEvent.type(registerName, "Carlos Pajares");
      userEvent.type(registerPassword, "entrar");
      userEvent.type(registerAge, "30");
      userEvent.type(
        registerBio,
        "Me gusta hacer rimas, soy el más grande, y pa cosas grandes aquí tengo mi fiambre"
      );

      const registrar = await screen.findByTestId("register-Registrar");
      userEvent.click(registrar);

      const username = await screen.findByTestId("login-username");
      const password = await screen.findByTestId("login-password");

      userEvent.type(username, "Sergio_gl");
      userEvent.type(password, "entrar");

      const entrar = await screen.findByTestId("login-Entrar");
      userEvent.click(entrar);

      const socialNavbar = await screen.findByTestId("navbar-social");
      userEvent.click(socialNavbar);

      const member = await screen.findByText("Calimero");

      screen.debug();

      expect(member).toBeInTheDocument();
    });
  });
});
