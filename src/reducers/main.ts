import { AnyAction } from "redux";
import { main } from "../constants/actionTypes";
import { MainState } from "../types";
import { orderTodos } from "../utils";

const defaultState: MainState = {
  test: null,
  isLoading: null,
  todos: [],
  error: null
};

export default function(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case main.GET_TODOS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case main.GET_TODOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todos: orderTodos(action.payload)
      };
    }
    case main.GET_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    case main.UPDATE_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case main.UPDATE_TODO_SUCCESS: {
      const newTodos = [...state.todos];
      const targetIndex = newTodos.findIndex(({ id }) => id === action.payload.todoId);
      newTodos.splice(targetIndex, 1, { ...newTodos[targetIndex], isComplete: action.payload.isComplete });

      return {
        ...state,
        isLoading: false,
        todos: orderTodos(newTodos)
      };
    }
    default:
      return {
        ...state
      };
  }
}
