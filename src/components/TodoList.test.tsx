import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as reduxHooks from "../store";
import { TodoList } from "./TodoList";
import todosMock from "../mocks/fetchTodos";

describe("Todos", () => {
  beforeEach(() => {
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValue({ isLoading: false, todos: todosMock });
  });

  test("renders", () => {
    const initialState = { isLoading: false, todos: todosMock };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
  });
});
