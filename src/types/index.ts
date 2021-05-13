export interface ITodoItem {
  id: string;
  description: string;
  isComplete: boolean;
  dueDate?: Date | string | undefined;
}

export interface ITodoItemList extends Array<ITodoItem> {}

export interface MainState {
  test: boolean | null;
  isLoading: boolean | null;
  todos: ITodoItemList;
  error: string | null;
}
