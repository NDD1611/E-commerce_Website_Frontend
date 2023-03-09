
import './RamFilter.scss'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addRamFilter, addRamFilterBorder } from "../../../redux/actionCreator"
import { listRams } from './dataFilterCommon.js'

function RamFilter() {



    let listIndexBorderFromStore = useSelector((state) => {
        return state.filters.listIndexRamBorder
    })

    useEffect(() => {
        setListIndexBorder(listIndexBorderFromStore)
    }, [listIndexBorderFromStore])

    let dispatch = useDispatch()

    let [listIndexBorder, setListIndexBorder] = useState([])


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

        let listRamFilter = listRams.filter((ram, index) => {
            return copyListIndex.includes(index)
        })
        dispatch(addRamFilter(listRamFilter))
        dispatch(addRamFilterBorder(copyListIndex))
        setListIndexBorder(copyListIndex)
    }

    return (
        <div>
            <div className="ram-content">
                {
                    listRams.map((obj, index) => {
                        return (
                            <div className={checkBorderBlue(index) ? 'border-blue' : ''} key={index} onClick={() => { handleClick(index) }}>{obj.value}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RamFilter;