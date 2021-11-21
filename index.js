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

    if (action.type === 'DEC_NUM') {
        return {
            ...state,
            num: state.num - action.b
        }
    }
    return state;
}


//store
const store = redux.createStore(rootReducer);

//subscribe 
store.subscribe(() => {
    console.log("[subscribe]", store.getState());

})

store.dispatch({
    type: 'INC_NUM'

});

store.dispatch({
    type: 'ADD_NUM',
    a: 35
})

store.dispatch({
    type: 'DEC_NUM',
    b: 5
})

