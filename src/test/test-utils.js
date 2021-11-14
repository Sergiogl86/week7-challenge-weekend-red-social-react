import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

const renderWithProviders = (component, initialState) => {
  const store = configureStore(initialState);
  const AllTheProviders = ({ children }) => {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    );
  };
  return render(component, { wrapper: AllTheProviders });
};

export default renderWithProviders;
