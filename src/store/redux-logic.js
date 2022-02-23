import { createStore } from 'redux'

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
}


const store = createStore(counterReducer)


const counterSubscriber = () => {
    store.getState()
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' })

store.dispatch({ type: 'decrement' })




export default store;