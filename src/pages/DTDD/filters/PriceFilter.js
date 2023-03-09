
import './PriceFilter.scss'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPriceFilter, addPriceFilterBorder } from '../../../redux/actionCreator.js'
import { listPrices } from './dataFilterCommon.js'
function PriceFilter() {

    let dispatch = useDispatch()
    let listIndexBorderFromStore = useSelector((state) => {
        return state.filters.listIndexPriceBorder
    })

    let checkBorderBlue = (index) => {
        let check = false
        for (let idx of listIndexBorder) {
            if (index === idx) {
                check = true
            }
        }
        return check
    }

    let handleClick = (indexBD) => {
        let copyListIndex = [...listIndexBorder]
        let check = false
        copyListIndex = copyListIndex.filter((index) => {
            if (indexBD === index) {
                check = true
            }
            return indexBD !== index
        })
        if (check === false) {
            copyListIndex.push(indexBD)
        }

        let listPriceFilter = listPrices.filter((price, index) => {
            return copyListIndex.includes(index)
        })
        dispatch(addPriceFilter(listPriceFilter))
        dispatch(addPriceFilterBorder(copyListIndex))
        setListIndexBorder(copyListIndex)
    }

    let [listIndexBorder, setListIndexBorder] = useState([])

    useEffect(() => {
        setListIndexBorder(listIndexBorderFromStore)
    }, [listIndexBorderFromStore])

    return (
        <div>
            <div className="price-content">
                {
                    listPrices.map((obj, index) => {
                        return (
                            <div className={checkBorderBlue(index) ? 'border-blue' : ''} key={index} onClick={() => { handleClick(index) }}>{obj.value}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PriceFilter;