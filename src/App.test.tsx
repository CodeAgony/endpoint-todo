import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as reduxHooks from "./store";
import App from "./App";
import todosMock from "./mocks/fetchTodos";

describe("App", () => {
  beforeEach(() => {
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue({ isLoading: false, todos: todosMock });
  });

  const initialState = { isLoading: false, todos: todosMock };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);

  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  test("renders", () => {
    render(app);
    expect(screen.getByTestId("app-root")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const tree = renderer.create(app).toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
