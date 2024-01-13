//state => action => reducer => store

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
//state

const initialState = {
  count: 0,
};

//actions
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementACtion = () => {
  return {
    type: DECREMENT,
  };
};

const resetACtion = () => {
  return {
    type: RESET,
  };
};

//reducer

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

const store = createStore(counter)

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(incrementAction())
store.dispatch(incrementAction())
// store.dispatch(decrementACtion())
store.dispatch(resetACtion())
