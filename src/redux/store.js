import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(
    // Add whatever middleware you actually want to use here
    applyMiddleware()
    // other store enhancers if any
)

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
    preloadedState = {
        todos: JSON.parse(persistedTodosString)
    }
}

const store = createStore(rootReducer, preloadedState, composedEnhancer)

export default store;