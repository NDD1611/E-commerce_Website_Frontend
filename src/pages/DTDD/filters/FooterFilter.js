
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../../../redux/actions';
import './FooterFilter.scss'

function FooterFilter() {
    let lengthXemKetQua = useSelector(state => state.filters.lengthXemKetQua)
    let dispatch = useDispatch()
    let listAfterFilterOnlyBrand = useSelector(state => state.filters.listAfterFilterOnlyBrand)
    let listAfterFilterManyFiled = useSelector(state => state.filters.listAfterFilterManyFiled)
    let isFilterOnlyBrand = useSelector(state => state.filters.isFilterOnlyBrand)
    let handleXemKetQua = (e) => {
        e.stopPropagation()

        dispatch({
            type: actionTypes.HIDE_ALL_FILTER
        })
        if (isFilterOnlyBrand) {
            dispatch({
                type: actionTypes.SET_LIST_SAN_PHAM,
                payload: listAfterFilterOnlyBrand
            })
            dispatch({
                type: actionTypes.SET_SHOW_LIST_SAN_PHAM
            })
            dispatch({
                type: actionTypes.SET_HIDE_LIST_PHIEN_BAN_DAY_DU
            })
        } else {
            dispatch({
                type: actionTypes.SET_LIST_PHIEN_BAN_DAY_DU,
                payload: listAfterFilterManyFiled
            })
            dispatch({
                type: actionTypes.SET_HIDE_LIST_SAN_PHAM
            })
            dispatch({
                type: actionTypes.SET_SHOW_LIST_PHIEN_BAN_DAY_DU
            })
        }
    }
    return (
        <div className="footer_filter">
            <button className='bo_chon' >Bỏ chọn</button>
            <button className='ket_qua' onClick={((e) => { handleXemKetQua(e) })}>Xem {lengthXemKetQua}  kết quả</button>
        </div>
    )
}

export default FooterFilter;