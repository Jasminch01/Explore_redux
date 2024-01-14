const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

//constant actions types
const GET_REQUEST = "GETREQUEST";
const GET_TODOS_FAILD = "GET_TODOS_FAILD";
const GET_TODOS_SUCCESS = "GET-TODOS_SUCCESS";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const getTodos = () => {
  return {
    type: GET_REQUEST,
  };
};
const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILD,
    payload: error,
  };
};
const getTodoSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_TODOS_FAILD:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

const fetchToDos = () => {
  return (dispatch) => {
    dispatch(getTodos());
    axios
      .get("https://jsonplaceholder.typicode.com/todo")
      .then((res) => {
        const todos = res.data
        const title = todos.map(todo => todo.title)
        dispatch(getTodoSuccess(title))
      })
      .catch((err) => {
        dispatch(getTodosFailed(err))
      });
  };
};

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchToDos());
