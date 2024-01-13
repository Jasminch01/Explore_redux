//state -> action -> reducer

//const type 
const INCREMENT = 'INCREMENT'
const ADD_USER = 'ADD_USER'

//state
const initialCounterState = {
    count : 0
}

const userState = {
    user : [{name : 'userName'}]
}

//action -> 1.type 2.payload
const incrementCounter = () => {
    return {
        type : INCREMENT,
    }
}

//action => payload
const addUser = (user) => {
    return {
        type : ADD_USER,
        payload : {user}
    }
}