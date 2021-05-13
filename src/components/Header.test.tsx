import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import * as reduxHooks from "../store";
import { Header } from "./Header";

describe("Header", () => {
  beforeEach(() => {
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue({ isLoading: true });
  });

  test("renders heading with correct text", async () => {
    const initialState = { isLoading: false };
    const mockStore = configureStore();
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
