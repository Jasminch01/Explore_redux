const { createStore } = require("redux");

const ADD_USER = "ADD_USER+";
const initialState = {
  user: [],
  count: 0,
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload : user
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user : [...state.user, action.payload],
        count : state.count + 1
      };

    default:
      state;
  }
};

const store = createStore(userReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addUser('jadu'))
