import { render, screen } from "@testing-library/react";
import { Todo } from "./Todo";

describe("Todo", () => {
  test("renders", () => {
    render(
      <Todo
        isOverdue
        key="test-key"
        todoItem={{
          id: "1",
          description: "File 2020 Taxes",
          isComplete: true,
          dueDate: "2020-03-10T17:50:44.673Z"
        }}
      />
    );

    const TodoItem = screen.getByTestId("todo-item");
    expect(TodoItem).toBeInTheDocument();
  });
});
