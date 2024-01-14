const { createStore, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")

const ADDPRODUCT ='ADDPRODUCT'

const initialState = {
    product : [],
    numberOfProduct : 0,
}

const addProduct = (product) => {
    return {
        type : ADDPRODUCT ,
        payload : product
    }
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return {
                product : [...state.product, action.payload],
                numberOfProduct : state.numberOfProduct + 1
            }
    
        default:
            return state
    }
}

const store = createStore(productReducer, applyMiddleware(logger))

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(addProduct('pen'))