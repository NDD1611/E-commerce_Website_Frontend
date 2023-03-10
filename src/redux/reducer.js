import { combineReducers } from 'redux'

import adminsReducer from './features/admins/adminsSlice'
import dataAllsReducer from './features/dataAlls/dataAlls.js'
import filtersReducer from './features/filters/filters.js'

const rootReducer = combineReducers({
    admins: adminsReducer,
    dataAlls: dataAllsReducer,
    filters: filtersReducer
})

export default rootReducer