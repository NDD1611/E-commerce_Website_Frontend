
import './PriceFilter.scss'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPriceFilter, addPriceFilterBorder } from '../../../redux/actionCreator.js'

function PriceFilter() {

    let dispatch = useDispatch()
    let listIndexBorderFromStore = useSelector((state) => {
        return state.filters.listIndexPriceBorder
    })

    let listPrices = [
        {
            dau: '0',
            cuoi: '2',
            value: 'Dưới 2 triệu'
        },
        {
            dau: '2',
            cuoi: '4',
            value: 'Từ 2 - 4 triệu'
        },
        {
            dau: '4',
            cuoi: '7',
            value: 'Từ 4 - 7 triệu'
        },
        {
            dau: '7',
            cuoi: '13',
            value: 'Từ 7 - 13 triệu'
        },
        {
            dau: '13',
            cuoi: '20',
            value: 'Từ 13 - 20 triệu'
        },
        {
            dau: '20',
            cuoi: '200',
            value: 'Trên 20 triệu'
        },
    ]

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