import actionTypes from '../../actions'


const initialState = {
    listSanPhams: [],
    listSanPhamPhienBans: [],
    listBrands: []
}

export default function dataAllsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_LIST_SAN_PHAM: {
            return {
                ...state,
                listSanPhams: action.payload
            }
        }
        case actionTypes.ADD_LIST_SAN_PHAM_DAY_DU: {
            return {
                ...state,
                listSanPhamPhienBans: action.payload
            }
        }
        case actionTypes.ADD_LIST_BRAND: {
            return {
                ...state,
                listBrands: action.payload
            }
        }
        default:
            return state
    }
}