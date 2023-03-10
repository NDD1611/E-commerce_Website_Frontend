
import './RomFilter.scss'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { listRoms } from './dataFilterCommon.js'
import FooterFilter from './FooterFilter'
import actionTypes from '../../../redux/actions'

function RomFilter() {

    let filters = useSelector(state => {
        return state.filters
    })
    let dispatch = useDispatch()
    let handleClickRom = (obj) => {
        let newListRoms = filters.listRomFilter.map((rom) => {
            if (rom.value === obj.value) {
                return {
                    ...rom,
                    select: !obj.select
                }
            } else {
                return rom
            }
        })
        dispatch({
            type: actionTypes.UPDATE_LIST_ROM_FILTER,
            payload: newListRoms
        })
    }
    return (
        <div>
            <div className="rom-content">
                <div className="content_filter">
                    {
                        filters.listRomFilter.map((obj, index) => {
                            return (
                                <div className={obj.select ? 'border-blue' : ''} key={index} onClick={() => { handleClickRom(obj) }}>{obj.value}</div>
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

export default RomFilter;