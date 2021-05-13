import React from "react";
import { format } from "date-fns";
import styled from "styled-components";
import { ITodoItem } from "../types";
import { Checkbox, Props as CheckboxProps } from "./Checkbox";

interface Props {
  isOverdue: boolean;
  isComplete?: boolean;
  todoItem: ITodoItem;
  key: string;
  updateItem?: (id: string, isComplete: boolean) => void;
}

type ITodoContainer = Pick<Props, "isOverdue" | "isComplete">;

const TodoContainer = styled("div")<ITodoContainer>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${({ isOverdue, isComplete }) => {
    if (isOverdue) {
      return "#ffcccc";
    }
    if (isComplete) {
      return "#ccffcc";
    }
    return "#f3f3f3";
  }};
  padding: 6px 5px 6px 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const DueDate = styled.time`
  display: block;
  padding: 2px 5px;
  border: 1px solid black;
`;

const StyledCheckbox = styled(Checkbox)<CheckboxProps>`
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "")};
`;

export const Todo: React.FC<Props> = ({ isOverdue, todoItem: { id, description, isComplete, dueDate }, updateItem }) => {
  // TODO: move click handler somewhere more UX-y

  const renderDate = () => {
    if (dueDate) {
      return <DueDate data-tesid="todo-due-date">{format(new Date(dueDate), "MM/dd/yyyy")}</DueDate>;
    }

    return null;
  };

  return (
    <TodoContainer data-testid="todo-item" isComplete={isComplete} isOverdue={isOverdue}>
      <StyledCheckbox isChecked={isComplete} handleCheck={() => (updateItem ? updateItem(id, !isComplete) : () => {})}>
        {description}
      </StyledCheckbox>
      {renderDate()}
    </TodoContainer>
  );
};
