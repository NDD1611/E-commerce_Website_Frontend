
import './RamFilter.scss'
import { useSelector, useDispatch } from "react-redux"
import FooterFilter from './FooterFilter'
import actionTypes from '../../../redux/actions'

function RamFilter() {
    let filters = useSelector(state => {
        return state.filters
    })
    let dispatch = useDispatch()
    let handleClickRam = (obj) => {
        let newListRams = filters.listRamFilter.map((ram) => {
            if (ram.value === obj.value) {
                return {
                    ...ram,
                    select: !obj.select
                }
            } else {
                return ram
            }
        })
        dispatch({
            type: actionTypes.UPDATE_LIST_RAM_FILTER,
            payload: newListRams
        })
    }
    return (
        <div>
            <div className="ram-content">
                <div className="content_filter">
                    {
                        filters.listRamFilter.map((obj, index) => {
                            return (
                                <div className={obj.select ? 'border-blue' : ''}
                                    key={index} onClick={() => { handleClickRam(obj) }}>{obj.value}</div>
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

export default RamFilter;