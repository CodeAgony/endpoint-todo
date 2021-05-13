import React from "react";
import { useDispatch } from "react-redux";
import { isAfter } from "date-fns";
import styled from "styled-components";
import { Todo } from "./Todo";
import { actions as mainActions } from "../actions";
import { useAppSelector } from "../store";
import { ITodoItem, ITodoItemList } from "../types";

const TodoListContainer = styled.main`
  max-width: 500px;
  margin: 15px auto;
`;

export const TodoList: React.FC = () => {
  const dispatch = useDispatch();

  const updateTodo = (id: string, isComplete: boolean) => dispatch(mainActions.updateTodo(id, isComplete));
  const { todos } = useAppSelector(state => state.main);

  const renderTodos = (todoList: ITodoItemList) => {
    return todoList.map((item: ITodoItem) => {
      const isOverdue = !!(item.dueDate && isAfter(new Date(), new Date(item.dueDate)) && !item.isComplete);
      return <Todo isOverdue={isOverdue} todoItem={item} key={item.id} updateItem={updateTodo} />;
    });
  };

  return <TodoListContainer data-testid="todo-list">{renderTodos(todos)}</TodoListContainer>;
};
