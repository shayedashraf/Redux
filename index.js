const redux = require('redux');

console.log(redux);

//state
const initState = {
    num: 0
}

//reducer 
const rootReducer = (state = initState, action) => {
    if (action.type === 'INC_NUM') {
        return {
            ...state,
            num: state.num + 1

        }
    }
    if (action.type === 'ADD_NUM') {
        return {
            ...state,
            num: state.num + action.a
        }
    }
    return state;
}


//store
const store = redux.createStore(rootReducer);

store.dispatch({
    type: 'INC_NUM'

});

store.dispatch({
    type: 'ADD_NUM',
    a: 35
})

console.log(store.getState());