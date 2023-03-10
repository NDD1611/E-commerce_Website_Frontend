

import './MainFilter.scss'
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import RamFilter from './RamFilter';
import RomFilter from './RomFilter';

import { useSelector, useDispatch } from 'react-redux';
import FooterFilter from './FooterFilter';
import actionTypes from '../../../redux/actions';
import { useEffect } from 'react';

function MainFilter() {
    let hideMainFilter = (e) => {
        e.stopPropagation();
        dispatch({
            type: actionTypes.HIDE_ALL_FILTER
        })
    }
    let dispatch = useDispatch()
    let filters = useSelector(state => {
        return state.filters
    })
    return (
        <div>
            <div className="main-filter-content">
                <button className='close_filter' onClick={(e) => { hideMainFilter(e) }}>
                    <i className="fa-solid fa-xmark"></i>
                    <span>
                        Đóng
                    </span>
                </button>
                <div className='title'>Hãng</div>
                <BrandFilter />
                <div className='price_ram_rom'>
                    <div className='common'>
                        <div className='title'>Giá</div>
                        <PriceFilter />
                    </div>
                    <div className='common'>
                        <div className='title'>Ram</div>
                        <RamFilter />
                    </div>
                    <div className='common'>
                        <div className='title'>Dung lượng lưu trữ</div>
                        <RomFilter />
                    </div>
                </div>
                {
                    filters.showXemKetQuaMainFilter ?
                        <FooterFilter />
                        : ''
                }
            </div>
        </div >
    )
}

export default MainFilter;