import { isAfter } from "date-fns";
import { ITodoItemList } from "../types";

export const orderTodos = (todos: ITodoItemList) => {
  // TODO: check
  // @ts-ignore
  const sortedByDate = todos.sort((a, b) => {
    if (a.dueDate && b.dueDate) {
      if (isAfter(new Date(a.dueDate), new Date(b.dueDate))) {
        return -1;
      }
    }
    if (!a.dueDate) {
      return -1;
    }
    if (!b.dueDate) {
      return 1;
    }
    return undefined;
  });

  // @ts-ignore
  return sortedByDate.sort(a => {
    if (!a.isComplete) {
      return -1;
    }
    return undefined;
  });
};
