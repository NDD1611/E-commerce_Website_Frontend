
import './PriceFilter.scss'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listPrices } from './dataFilterCommon.js'
import FooterFilter from './FooterFilter.js'
import actionTypes from '../../../redux/actions'
function PriceFilter() {

    let filters = useSelector(state => {
        return state.filters
    })
    let dispatch = useDispatch()
    let addPriceFilterStore = (obj) => {
        let newListPrices = filters.listPriceFilter.map((price) => {
            if (price.value === obj.value) {
                return {
                    ...price,
                    select: !price.select
                }
            } else {
                return price
            }
        })
        dispatch({
            type: actionTypes.UPDATE_LIST_PRICE_FILTER,
            payload: newListPrices
        })
    }
    return (
        <div>
            <div className="price-content">
                <div className="content_filter">
                    {
                        filters.listPriceFilter.map((obj, index) => {
                            return (
                                <div className={obj.select ? 'border-blue' : ''} key={index} onClick={() => { addPriceFilterStore(obj) }} >{obj.value}</div>
                            )
                        })
                    }
                </div>
                {
                    filters.showXemKetQuaBPRR ?
                        <FooterFilter />
                        : ''
                }
            </div>
        </div>
    )
}

export default PriceFilter;