const {createStore} = require('redux')

//state -> action -> reducer -> store

//const type 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
// const ADD_USER = 'ADD_USER'

//state
const initialCounterState = {
    count : 0
}

// const userState = {
//     user : [{name : 'userName'}]
// }

//action -> 1.type 2.payload
const incrementCounter = () => {
    return {
        type : INCREMENT,
    }
}
const decrementCounter = () => {
    return {
        type : DECREMENT,
    }
}

//action => payload
// const addUser = (user) => {
//     return {
//         type : ADD_USER,
//         payload : {user}
//     }
// }

//reducer
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count : state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count : state.count - 1
            }
        default: state
    }
}

//Create store
const store = createStore(counterReducer)

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())
