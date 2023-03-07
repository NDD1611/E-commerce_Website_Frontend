
import Action from './actions'

export let addBrandFilter = (data) => {
    return {
        ...Action.ADD_BRAND_FILTER,
        payload: data
    }
}
export let addBrandFilterBorder = (data) => {
    return {
        ...Action.ADD_BRAND_FILTER_BORDER,
        payload: data
    }
}

export let addPriceFilter = (data) => {
    return {
        ...Action.ADD_PRICE_FILTER,
        payload: data
    }
}
export let addPriceFilterBorder = (data) => {
    return {
        ...Action.ADD_PRICE_FILTER_BORDER,
        payload: data
    }
}
export let addRamFilter = (data) => {
    return {
        ...Action.ADD_RAM_FILTER,
        payload: data
    }
}
export let addRamFilterBorder = (data) => {
    return {
        ...Action.ADD_RAM_FILTER_BORDER,
        payload: data
    }
}
export let addRomFilter = (data) => {
    return {
        ...Action.ADD_ROM_FILTER,
        payload: data
    }
}
export let addRomFilterBorder = (data) => {
    return {
        ...Action.ADD_ROM_FILTER_BORDER,
        payload: data
    }
}