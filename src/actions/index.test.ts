import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import axios from "../../src/utils/api/axios";
import { actions } from "./index";
import { main as mainActions } from "../constants/actionTypes";
import fetchTodosMock from "../mocks/fetchTodos";

const mockStore = configureMockStore([thunk]);

describe("getTodos action creator", () => {
  beforeEach(function() {
    moxios.install(axios);
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("fetches todos and dispatches success action with fetched data", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: fetchTodosMock
      });
    });

    const expectedActions = [{ type: mainActions.GET_TODOS_REQUEST }, { type: mainActions.GET_TODOS_SUCCESS, payload: fetchTodosMock }];

    const store = mockStore({ todos: [] });

    // @ts-ignore
    return store.dispatch(actions.getTodos()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
