import actionTypes from '../../actions'


const initialState = {
    showXemKetQuaMainFilter: false,
    showXemKetQuaBPRR: false,
    showMainFilter: false,
    showBrandFilter: false,
    showPriceFilter: false,
    showRamFilter: false,
    showRomFilter: false,
    listMainFilter: [],
    listBrandFilter: [],
    listPriceFilter: [],
    listRamFilter: [],
    listRomFilter: [],

    isFilterOnlyBrand: false,
    listAfterFilterOnlyBrand: [],
    listAfterFilterManyFiled: [],
    lengthXemKetQua: 0,
    listSanPhams: [],
    listPhienBanDayDus: [],
    isShowListSanPhams: true,
    isShowListPhienBans: false

}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SHOW_MAIN_FILTER:
            return {
                ...state,
                showMainFilter: true,
                showBrandFilter: false,
                showPriceFilter: false,
                showRamFilter: false,
                showRomFilter: false,
            }
        case actionTypes.SHOW_BRAND_FILTER:
            return {
                ...state,
                showMainFilter: false,
                showBrandFilter: true,
                showPriceFilter: false,
                showRamFilter: false,
                showRomFilter: false,
            }
        case actionTypes.SHOW_PRICE_FILTER:
            return {
                ...state,
                showMainFilter: false,
                showBrandFilter: false,
                showPriceFilter: true,
                showRamFilter: false,
                showRomFilter: false,
            }
        case actionTypes.SHOW_RAM_FILTER:
            return {
                ...state,
                showMainFilter: false,
                showBrandFilter: false,
                showPriceFilter: false,
                showRamFilter: true,
                showRomFilter: false,
            }
        case actionTypes.SHOW_ROM_FILTER:
            return {
                ...state,
                showMainFilter: false,
                showBrandFilter: false,
                showPriceFilter: false,
                showRamFilter: false,
                showRomFilter: true,
            }
        case actionTypes.HIDE_ALL_FILTER:
            return {
                ...state,
                showMainFilter: false,
                showBrandFilter: false,
                showPriceFilter: false,
                showRamFilter: false,
                showRomFilter: false,
            }
        case actionTypes.UPDATE_LIST_BRAND_FILTER:
            return {
                ...state,
                listBrandFilter: action.payload
            }
        case actionTypes.UPDATE_LIST_PRICE_FILTER:
            return {
                ...state,
                listPriceFilter: action.payload
            }
        case actionTypes.UPDATE_LIST_RAM_FILTER:
            return {
                ...state,
                listRamFilter: action.payload
            }
        case actionTypes.UPDATE_LIST_ROM_FILTER:
            return {
                ...state,
                listRomFilter: action.payload
            }
        case actionTypes.UPDATE_IS_FILTER_ONLY_BRAND:
            return {
                ...state,
                isFilterOnlyBrand: action.payload
            }
        case actionTypes.UPDATE_LIST_AFTER_FILTER_ONLY_BRAND:
            return {
                ...state,
                listAfterFilterOnlyBrand: action.payload
            }
        case actionTypes.UPDATE_LIST_AFTER_FILTER_MANY_FIELD:
            return {
                ...state,
                listAfterFilterManyFiled: action.payload
            }
        case actionTypes.SHOW_XEM_KET_QUA_BPRR:
            return {
                ...state,
                showXemKetQuaBPRR: true
            }
        case actionTypes.HIDE_XEM_KET_QUA_BPRR:
            return {
                ...state,
                showXemKetQuaBPRR: false
            }
        case actionTypes.SHOW_XEM_KET_QUA_MAIN:
            return {
                ...state,
                showXemKetQuaMainFilter: true
            }
        case actionTypes.HIDE_XEM_KET_QUA_MAIN:
            return {
                ...state,
                showXemKetQuaMainFilter: false
            }
        case actionTypes.UPDATE_LENGTH_XEM_KET_QUA:
            return {
                ...state,
                lengthXemKetQua: action.payload
            }
        case actionTypes.SET_LIST_SAN_PHAM:
            return {
                ...state,
                listSanPhams: action.payload
            }
        case actionTypes.SET_LIST_PHIEN_BAN_DAY_DU:
            return {
                ...state,
                listPhienBanDayDus: action.payload
            }
        case actionTypes.SET_SHOW_LIST_SAN_PHAM:
            return {
                ...state,
                isShowListSanPhams: true
            }
        case actionTypes.SET_SHOW_LIST_PHIEN_BAN_DAY_DU:
            return {
                ...state,
                isShowListPhienBans: true
            }
        case actionTypes.SET_HIDE_LIST_SAN_PHAM:
            return {
                ...state,
                isShowListSanPhams: false
            }
        case actionTypes.SET_HIDE_LIST_PHIEN_BAN_DAY_DU:
            return {

                ...state,
                isShowListPhienBans: false
            }
        default:

            return state
    }
} 
