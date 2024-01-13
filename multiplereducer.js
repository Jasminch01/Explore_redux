const { createStore, combineReducers } = require("redux");

const GETPRODUCT = "GETPRODUCT";
const ADDPRODUCT = "ADDPRODUCT";

//cart const 
const GETCART = "GETCART";
const ADDCART = 'ADDCART'

//Cartstate

const initialCartState = {
    product : [],
    count : 0
}

//product state
const initialState = {
  product: ["cat", "dog"],
  count: 2,
};

//cart action 

const getCart = () => {
    return {
        type : GETCART
    }
}

const addCart = (product) => {
    return {
        type : ADDCART,
        payload : product,
    }
}

//product action
const getProductAction = () => {
  return {
    type: GETPRODUCT,
  };
};

const addProductAction = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};
//caet reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GETCART:
      return {
        product: [...state.product],
        count: state.count,
      };
    case ADDCART:
      return {
        product: [...state.product, action.payload],
        count: state.count + 1,
      };
    default:
        return state;
  }
};

//product reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODUCT:
      return {
        product: [...state.product],
        count: state.count,
      };
    case ADDPRODUCT:
      return {
        product: [...state.product, action.payload],
        count: state.count + 1,
      };
    default:
        return state;
  }
};

const multipleReducer = combineReducers({
    productReducer,
    cartReducer
})
const store = createStore(multipleReducer);

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(getProductAction())
store.dispatch(addProductAction("meaw"))

store.dispatch(getCart())
store.dispatch(addCart("book"))
