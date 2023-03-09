import { combineReducers } from 'redux'

import filtersReducer from './features/filters/filtersSlice'
import adminsReducer from './features/admins/adminsSlice'
import dataAllsReducer from './features/dataAlls/dataAlls.js'

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    filters: filtersReducer,
    admins: adminsReducer,
    dataAlls: dataAllsReducer
})

export default rootReducer