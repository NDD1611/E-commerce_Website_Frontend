
import actionTypes from "../../actions"

const initialState = {
    allFilter: [],
    brand: [],
    listIndexBrandBorder: [],
    price: [],
    listIndexPriceBorder: [],
    ram: [],
    listIndexRamBorder: [],
    rom: [],
    listIndexRomBorder: [],
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_BRAND_FILTER: {
            return {
                ...state,
                brand: action.payload
            }
        }
        case actionTypes.ADD_BRAND_FILTER_BORDER: {
            return {
                ...state,
                listIndexBrandBorder: action.payload
            }
        }
        case actionTypes.ADD_PRICE_FILTER: {
            return {
                ...state,
                price: action.payload
            }
        }
        case actionTypes.ADD_PRICE_FILTER_BORDER: {
            return {
                ...state,
                listIndexPriceBorder: action.payload
            }
        }
        case actionTypes.ADD_RAM_FILTER: {
            return {
                ...state,
                ram: action.payload
            }
        }
        case actionTypes.ADD_RAM_FILTER_BORDER: {
            return {
                ...state,
                listIndexRamBorder: action.payload
            }
        }
        case actionTypes.ADD_ROM_FILTER: {
            return {
                ...state,
                rom: action.payload
            }
        }
        case actionTypes.ADD_ROM_FILTER_BORDER: {
            return {
                ...state,
                listIndexRomBorder: action.payload
            }
        }
        default:
            return state
    }
}