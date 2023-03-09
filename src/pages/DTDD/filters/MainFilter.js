

import './MainFilter.scss'
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import RamFilter from './RamFilter';
import RomFilter from './RomFilter';

import { useSelector, useDispatch } from 'react-redux';
import { listPrices, listRams, listRoms } from './dataFilterCommon';
import {
    addBrandFilter, addBrandFilterBorder, addPriceFilter, addPriceFilterBorder,
    addRamFilter, addRamFilterBorder, addRomFilter, addRomFilterBorder
} from '../../../redux/actionCreator.js'
import { useEffect, useState } from 'react';


function MainFilter(props) {
    let filter = useSelector(state => {
        return state.filters
    })
    let [showSelectFilter, setShowSelectFilter] = useState(false)

    let checkShowSelectFilter = () => {
        if (filter.brand.length == 0 && filter.price.length == 0 && filter.ram.length == 0 && filter.rom.length == 0) {
            setShowSelectFilter(false)
        } else {
            setShowSelectFilter(true)
        }
    }
    useEffect(() => {
        checkShowSelectFilter()
    }, [filter])

    let dispatch = useDispatch()

    let handleClickRemoveBrand = (brand) => {
        console.log(filter.brand, brand, filter.listIndexBrandBorder)
        let listNewBrand = filter.brand.filter((brd) => {
            if (brd.maNsx == brand.maNsx) {
                return false
            } else {
                return true
            }
        })
        let listIndex = []
        for (let i = 0; i < props.listBrands.length; i++) {
            for (let j = 0; j < listNewBrand.length; j++) {
                if (props.listBrands[i].maNsx == listNewBrand[j].maNsx) {
                    listIndex.push(i)
                }
            }
        }
        dispatch(addBrandFilter(listNewBrand))
        dispatch(addBrandFilterBorder(listIndex))
    }

    let handleClickRemovePrice = (pri) => {
        let listNewPrice = filter.price.filter((price) => {
            if (price.value == pri.value) {
                return false
            } else {
                return true
            }
        })
        let listIndex = []
        for (let i = 0; i < listPrices.length; i++) {
            for (let j = 0; j < listNewPrice.length; j++) {
                let prc = listPrices[i]
                let price = listNewPrice[j]
                if (price.value == prc.value) {
                    listIndex.push(i)
                }
            }
        }
        dispatch(addPriceFilter(listNewPrice))
        dispatch(addPriceFilterBorder(listIndex))
    }

    let handleClickRemoveRam = (ramPar) => {
        let listNewRam = filter.ram.filter((ram) => {
            console.log(ramPar, ram)
            if (ram.value == ramPar.value) {
                return false
            } else {
                return true
            }
        })
        let listIndex = []
        for (let i = 0; i < listRams.length; i++) {
            for (let j = 0; j < listNewRam.length; j++) {
                let rami = listRams[i]
                let ramj = listNewRam[j]
                if (ramj.value == rami.value) {
                    listIndex.push(i)
                }
            }
        }
        dispatch(addRamFilter(listNewRam))
        dispatch(addRamFilterBorder(listIndex))
    }

    let handleClickRemoveRom = (romPar) => {
        let listNewRom = filter.rom.filter((rom) => {
            if (rom.value == romPar.value) {
                return false
            } else {
                return true
            }
        })
        let listIndex = []
        for (let i = 0; i < listRoms.length; i++) {
            for (let j = 0; j < listNewRom.length; j++) {
                let romi = listRoms[i]
                let romj = listNewRom[j]
                if (romj.value == romi.value) {
                    listIndex.push(i)
                }
            }
        }
        dispatch(addRomFilter(listNewRom))
        dispatch(addRomFilterBorder(listIndex))
    }

    let removeAllFilter = () => {
        dispatch(addBrandFilter([]))
        dispatch(addBrandFilterBorder([]))
        dispatch(addPriceFilter([]))
        dispatch(addPriceFilterBorder([]))
        dispatch(addRamFilter([]))
        dispatch(addRamFilterBorder([]))
        dispatch(addRomFilter([]))
        dispatch(addRomFilterBorder([]))
    }

    let clickCloseMainFilter = (e) => {
        e.stopPropagation();
        props.closeMainFilter()
        props.setXemKetQua()
    }

    let clickBoChon = (e) => {
        e.stopPropagation();
        removeAllFilter()
        props.closeMainFilter()
        props.setBoChon()
    }

    return (
        <div>
            <div className="main-filter-content">
                <button className='close_filter' onClick={(e) => { clickCloseMainFilter(e) }}>
                    <i className="fa-solid fa-xmark"></i>
                    <span>
                        Đóng
                    </span>
                </button>
                <div className={showSelectFilter ? 'show_select_filter' : 'hide'}>
                    <div className='title'>Đã chọn:</div>
                    <div className='show_select_filter_content'>
                        {
                            filter.brand.map((brand, index) => {
                                return (
                                    <div className='button_delete' key={index} onClick={() => { handleClickRemoveBrand(brand) }}>
                                        {brand.tenNsx}
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                )
                            })
                        }
                        {
                            filter.price.map((price, index) => {
                                return (
                                    <div className='button_delete' key={index} onClick={() => { handleClickRemovePrice(price) }}>
                                        {price.value}
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                )
                            })
                        }
                        {
                            filter.ram.map((ram, index) => {
                                return (
                                    <div className='button_delete' key={index} onClick={() => { handleClickRemoveRam(ram) }}>
                                        {ram.value}
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                )
                            })
                        }
                        {
                            filter.rom.map((rom, index) => {
                                return (
                                    <div className='button_delete' key={index} onClick={() => { handleClickRemoveRom(rom) }}>
                                        {rom.value}
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                )
                            })
                        }

                        <div className='button_delete_all' onClick={(e) => { removeAllFilter(e) }}>
                            <span>
                                Xóa tất cả
                            </span>
                        </div>
                    </div>
                </div>
                <div className='title'>Hãng</div>
                <BrandFilter listBrands={props.listBrands} />
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
                <div className="footer_filter">
                    <button className='bo_chon' onClick={(e) => { clickBoChon(e) }}>Bỏ chọn</button>
                    <button className='ket_qua' onClick={(e) => { clickCloseMainFilter(e) }}>Xem {props.lengthKetQua} kết quả</button>
                </div>
            </div>
        </div >
    )
}

export default MainFilter;