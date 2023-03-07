
import './RomFilter.scss'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addRomFilter, addRomFilterBorder } from "../../../redux/actionCreator"

function RomFilter() {

    let listRoms = [
        {
            key: '32',
            value: '32 GB'
        },
        {
            key: '64',
            value: '64 GB'
        },
        {
            key: '128',
            value: '128 GB'
        },
        {
            key: '256',
            value: '256 GB'
        },
        {
            key: '512',
            value: '512 GB'
        },
        {
            key: '1024',
            value: '1 TB'
        },
    ]

    let listIndexBorderFromStore = useSelector((state) => {
        return state.filters.listIndexRomBorder
    })

    useEffect(() => {
        setListIndexBorder(listIndexBorderFromStore)
    }, [listIndexBorderFromStore])

    let dispatch = useDispatch()

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
        let listRomFilter = listRoms.filter((ram, index) => {
            return copyListIndex.includes(index)
        })
        dispatch(addRomFilter(listRomFilter))
        dispatch(addRomFilterBorder(copyListIndex))
        setListIndexBorder(copyListIndex)
    }

    let [listIndexBorder, setListIndexBorder] = useState([])

    return (
        <div>
            <div className="rom-content">
                {
                    listRoms.map((obj, index) => {
                        return (
                            <div className={checkBorderBlue(index) ? 'border-blue' : ''} key={index} onClick={() => { handleClick(index) }}>{obj.value}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RomFilter;