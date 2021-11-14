import { screen } from "@testing-library/react";
import renderWithProviders from "../test/test-utils";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it is render", () => {
    test("Then it should have a some inputs and sudmit button Registrar", async () => {
      renderWithProviders(<RegisterPage />);
      screen.debug();

      const titlePAge = screen.getByRole("heading", {
        name: "RegisterPage",
      });
      const labelContraseña = screen.getByText("Contraseña:");
      const sudmitButton = screen.getByRole("button", {
        name: "Registrar",
      });
      const inputFile = screen.getByTestId("register-file");

      expect(titlePAge).toBeInTheDocument();
      expect(sudmitButton).toBeInTheDocument();
      expect(labelContraseña).toBeInTheDocument();
      expect(inputFile).toBeInTheDocument();
    });
  });
});
