import { combineReducers } from 'redux'

import filtersReducer from './features/filters/filtersSlice'
import adminsReducer from './features/admins/adminsSlice'

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    filters: filtersReducer,
    admins: adminsReducer
})

export default rootReducer