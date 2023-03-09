
import actionTypes from './actions'

export let addBrandFilter = (data) => {
    return {
        type: actionTypes.ADD_BRAND_FILTER,
        payload: data
    }
}
export let addBrandFilterBorder = (data) => {
    return {
        type: actionTypes.ADD_BRAND_FILTER_BORDER,
        payload: data
    }
}

export let addPriceFilter = (data) => {
    return {
        type: actionTypes.ADD_PRICE_FILTER,
        payload: data
    }
}
export let addPriceFilterBorder = (data) => {
    return {
        type: actionTypes.ADD_PRICE_FILTER_BORDER,
        payload: data
    }
}
export let addRamFilter = (data) => {
    return {
        type: actionTypes.ADD_RAM_FILTER,
        payload: data
    }
}
export let addRamFilterBorder = (data) => {
    return {
        type: actionTypes.ADD_RAM_FILTER_BORDER,
        payload: data
    }
}
export let addRomFilter = (data) => {
    return {
        type: actionTypes.ADD_ROM_FILTER,
        payload: data
    }
}
export let addRomFilterBorder = (data) => {
    return {
        type: actionTypes.ADD_ROM_FILTER_BORDER,
        payload: data
    }
}

export let addListSanPham = (data) => {
    return {

    }
}