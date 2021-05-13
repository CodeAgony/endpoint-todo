import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "../utils/api/axios";
import { main } from "../constants/actionTypes";
import { RootState } from "../store";

export const actions = {
  getTodos(): ThunkAction<void, RootState, unknown, AnyAction> {
    return dispatch => {
      dispatch({
        type: main.GET_TODOS_REQUEST
      });

      return axios({
        method: "GET",
        url: "/get"
      })
        .then(res => {
          dispatch({
            type: main.GET_TODOS_SUCCESS,
            payload: res.data
          });
        })
        .catch(err => {
          console.error(err);

          dispatch({
            type: main.GET_TODOS_FAILURE,
            payload: err?.response?.data?.error || "Error fetching your todos"
          });
        });
    };
  },

  updateTodo(todoId: string, isComplete: boolean): ThunkAction<void, RootState, unknown, AnyAction> {
    return dispatch => {
      dispatch({
        type: main.UPDATE_TODO_REQUEST
      });

      return axios({
        method: "PATCH",
        url: `/patch/${todoId}`,
        data: { isComplete }
      })
        .then(() => {
          dispatch({
            type: main.UPDATE_TODO_SUCCESS,
            payload: { todoId, isComplete }
          });
        })
        .catch(err => {
          console.error(err);

          dispatch({
            type: main.UPDATE_TODO_FAILURE,
            payload: err?.response?.data?.error || "Error updating your todos"
          });
        });
    };
  }
};
