import actionTypes from '../../actions'


const initialState = {
    listSanPham: [],
    listSanPhamPhienBan: []
}

export default function dataAllsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_LIST_SAN_PHAM: {
            return {
                ...state,
                listSanPham: action.payload
            }
        }
        case actionTypes.ADD_LIST_SAN_PHAM_DAY_DU: {
            return {
                ...state,
                listSanPhamPhienBan: action.payload
            }
        }
        default:
            return state
    }
}