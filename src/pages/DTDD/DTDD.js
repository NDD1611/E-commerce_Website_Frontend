
import Header from "../../component/Header/Header.js"
import Footer from '../../component/Footer/Footer.js'
import './DTDD.scss'
import './carousel.js'
import CarouselC from "./carousel.js";
import Services from "../../services/Services.js";
import PhienBan from "./PhienBan.js";
import PhienBanDayDu from './PhienBanDayDu.js'
import BrandFilter from './filters/BrandFilter'
import PriceFilter from './filters/PriceFilter'
import RamFilter from "./filters/RamFilter.js";
import RomFilter from "./filters/RomFilter.js";

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import MainFilter from "./filters/MainFilter.js";

import actionTypes from '../../redux/actions.js'
import { listPrices, listRams, listRoms } from './filters/dataFilterCommon'

function DTDD() {
    let getAllData = async () => {
        let listBrandFromServer = await Services.getAllNsxDTDD()
        let listProductFromServer = await Services.getAllSanPham()
        let listPhienBanDayDuFromServer = await Services.getPhienBanDayDu()
        let newListBrands = addFieldSelectListBrand(listBrandFromServer)
        dispatch({
            type: actionTypes.SET_LIST_SAN_PHAM,
            payload: listProductFromServer
        })
        dispatch({
            type: actionTypes.ADD_LIST_BRAND,
            payload: listBrandFromServer
        })
        dispatch({
            type: actionTypes.ADD_LIST_SAN_PHAM,
            payload: listProductFromServer
        })
        dispatch({
            type: actionTypes.ADD_LIST_SAN_PHAM_DAY_DU,
            payload: listPhienBanDayDuFromServer
        })

        dispatch({
            type: actionTypes.UPDATE_LIST_BRAND_FILTER,
            payload: newListBrands
        })
        dispatch({
            type: actionTypes.UPDATE_LIST_PRICE_FILTER,
            payload: listPrices
        })
        dispatch({
            type: actionTypes.UPDATE_LIST_RAM_FILTER,
            payload: listRams
        })
        dispatch({
            type: actionTypes.UPDATE_LIST_ROM_FILTER,
            payload: listRoms
        })
    }

    let addFieldSelectListBrand = (list) => {
        let newList = list.map((obj) => {
            return {
                ...obj,
                select: false
            }
        })
        return newList
    }

    let dispatch = useDispatch()

    useEffect(() => {
        getAllData()
    }, [])

    let listBrandStore = useSelector(state => state.filters.listBrandFilter)
    let listPriceStore = useSelector(state => state.filters.listPriceFilter)
    let listRamStore = useSelector(state => state.filters.listRamFilter)
    let listRomStore = useSelector(state => state.filters.listRomFilter)

    let listSanPhamStore = useSelector(state => state.dataAlls.listSanPhams)
    let listPhienBanDayDuStore = useSelector(state => state.dataAlls.listSanPhamPhienBans)
    let showMainStore = useSelector(state => state.filters.showMainFilter)
    let showBrandStore = useSelector(state => state.filters.showBrandFilter)
    let showPriceStore = useSelector(state => state.filters.showPriceFilter)
    let showRamStore = useSelector(state => state.filters.showRamFilter)
    let showRomStore = useSelector(state => state.filters.showRomFilter)
    let showXemKetQuaMainFilter = useSelector(state => state.filters.showXemKetQuaMainFilter)
    let showXemKetQuaBPRR = useSelector(state => state.filters.showXemKetQuaBPRR)
    let listAfterFilterOnlyBrand = useSelector(state => state.filters.listAfterFilterOnlyBrand)
    let listAfterFilterManyFiled = useSelector(state => state.filters.listAfterFilterManyFiled)
    let isFilterOnlyBrand = useSelector(state => state.filters.isFilterOnlyBrand)
    let showMainFilterStore = useSelector(state => state.filters.showMainFilter)
    let listSanPhams = useSelector(state => state.filters.listSanPhams)
    let listPhienBanDayDus = useSelector(state => state.filters.listPhienBanDayDus)
    let isShowListSanPhams = useSelector(state => state.filters.isShowListSanPhams)
    let isShowListPhienBans = useSelector(state => state.filters.isShowListPhienBans)
    let showMainFilter = (e) => {
        e.stopPropagation()
        dispatch({
            type: actionTypes.SHOW_MAIN_FILTER
        })
        dispatch({
            type: actionTypes.HIDE_XEM_KET_QUA_BPRR
        })
    }
    let showBrandFilter = (e) => {
        e.stopPropagation()
        dispatch({
            type: actionTypes.SHOW_BRAND_FILTER
        })
    }
    let showPriceFilter = (e) => {
        e.stopPropagation()
        dispatch({
            type: actionTypes.SHOW_PRICE_FILTER
        })
    }
    let showRamFilter = (e) => {
        e.stopPropagation()
        dispatch({
            type: actionTypes.SHOW_RAM_FILTER
        })
    }
    let showRomFilter = (e) => {
        e.stopPropagation()
        dispatch({
            type: actionTypes.SHOW_ROM_FILTER
        })
    }
    let hideAllFilter = () => {
        dispatch({
            type: actionTypes.HIDE_ALL_FILTER
        })
    }

    let checkFilterOnlyBrand = () => { // chi filter tren brand cacs filter khac khong co true, false nguoc lai
        let check = true
        listPriceStore.forEach((obj) => {
            if (obj.select === true) {
                check = false
            }
        })
        listRamStore.forEach((obj) => {
            if (obj.select === true) {
                check = false
            }
        })
        listRomStore.forEach((obj) => {
            if (obj.select === true) {
                check = false
            }
        })
        return check
    }
    let filterBrand = (lists) => {
        let check = false  // bien co thuc hien filter hay khong hay khong
        for (let brand of listBrandStore) {
            if (brand.select) {
                check = true
            }
        }
        if (check === false) {
            return lists
        }
        let newLists = lists.filter((sp) => {
            for (let brand of listBrandStore) {
                if (sp.maNsx === brand.maNsx && brand.select === true) {
                    return true
                }
            }
            return false
        })
        return newLists
    }
    let filterPrice = (lists) => {
        let check = false  // bien co thuc hien filter hay khong hay khong
        for (let price of listPriceStore) {
            if (price.select) {
                check = true
            }
        }
        if (check === false) {
            return lists
        }
        let newLists = lists.filter((sp) => {
            let priceSp = parseFloat(sp.cost) - (parseFloat(sp.cost) * parseFloat(sp.discount) / 100)
            for (let price of listPriceStore) {
                let dau = parseInt(price.dau) * 1000000
                let cuoi = parseInt(price.cuoi) * 1000000
                if (priceSp >= dau && priceSp < cuoi && price.select) {
                    return true
                }
            }
            return false
        })
        return newLists
    }
    let filterRam = (lists) => {
        let check = false  // bien co thuc hien filter hay khong hay khong
        for (let ram of listRamStore) {
            if (ram.select) {
                check = true
            }
        }
        if (check === false) {
            return lists
        }
        let newLists = lists.filter((sp) => {
            let ramSp = sp.Ram
            for (let ram of listRamStore) {
                if (ramSp === ram.key && ram.select) {
                    return true
                }
            }
            return false
        })
        return newLists
    }

    let filterRom = (lists) => {
        let check = false  // bien co thuc hien filter hay khong hay khong
        for (let rom of listRomStore) {
            if (rom.select) {
                check = true
            }
        }
        if (check === false) {
            return lists
        }
        let newLists = lists.filter((sp) => {
            let romSp = sp.Rom
            for (let rom of listRomStore) {
                if (romSp === rom.key && rom.select) {
                    return true
                }
            }
            return false
        })
        return newLists

    }

    let filterMain = () => {
        if (checkFilterOnlyBrand()) {
            console.log('filter brand')
            let listAfterBrand = filterBrand(listSanPhamStore)
            dispatch({
                type: actionTypes.UPDATE_IS_FILTER_ONLY_BRAND,
                payload: true
            })
            dispatch({
                type: actionTypes.UPDATE_LIST_AFTER_FILTER_ONLY_BRAND,
                payload: listAfterBrand
            })
            dispatch({
                type: actionTypes.UPDATE_LENGTH_XEM_KET_QUA,
                payload: listAfterBrand.length
            })
            if (listAfterBrand.length) {
                dispatch({
                    type: actionTypes.SHOW_XEM_KET_QUA_BPRR
                })
                dispatch({
                    type: actionTypes.SHOW_XEM_KET_QUA_MAIN
                })
            }
        } else {
            console.log('filter many field')
            let listAfterBrand = filterBrand(listPhienBanDayDuStore)
            let listAfterPrice = filterPrice(listAfterBrand)
            let listAfterRam = filterRam(listAfterPrice)
            let listAfterRom = filterRom(listAfterRam)
            dispatch({
                type: actionTypes.UPDATE_IS_FILTER_ONLY_BRAND,
                payload: false
            })
            dispatch({
                type: actionTypes.UPDATE_LIST_AFTER_FILTER_MANY_FIELD,
                payload: listAfterRom
            })
            dispatch({
                type: actionTypes.UPDATE_LENGTH_XEM_KET_QUA,
                payload: listAfterRom.length
            })
            if (listAfterRom.length) {
                dispatch({
                    type: actionTypes.SHOW_XEM_KET_QUA_BPRR
                })
                dispatch({
                    type: actionTypes.SHOW_XEM_KET_QUA_MAIN
                })
            }
        }
        if (showMainFilterStore) {
            dispatch({
                type: actionTypes.HIDE_XEM_KET_QUA_BPRR
            })
        }
    }
    useEffect(() => {
        filterMain()
    }, [listBrandStore, listPriceStore, listRamStore, listRomStore])
    console.log(listSanPhams, 'listSan ')
    return (
        <div>
            <Header />
            <div id="DTDD" onClick={hideAllFilter}>
                <div className='carousel-top'>
                    <div className="left">
                        <CarouselC />
                    </div>
                    <div className="right">
                        <div>
                            <img src="http://localhost:8080/public/image/carousel_right_sticky-a57-copy-390x97.png" />
                        </div>
                        <div>
                            <img src="http://localhost:8080/public/image/carousel_right_sticky-mseri3-copy7-390x97.png" />
                        </div>
                    </div>

                </div>

                <div className="filter_container">
                    <div className="filter_top">
                        <div className="btn my_btn" onClick={showMainFilter}>
                            <i className="fa-solid fa-filter i_mg_left"></i>
                            Bộ lọc
                            {
                                showMainStore ?
                                    <div className='main-filter'>
                                        <div className="arrow-filter"></div>
                                        <MainFilter />
                                    </div>
                                    : ''
                            }
                        </div>
                        <div className="btn my_btn" onClick={showBrandFilter}>
                            Hãng
                            <i className="fa-solid fa-caret-down"></i>
                            {
                                showBrandStore ?
                                    <div className='brand'>
                                        <div className="arrow-filter"></div>
                                        <BrandFilter />
                                    </div>
                                    : ''
                            }
                        </div>
                        <div className="btn my_btn" onClick={showPriceFilter}>
                            Giá
                            <i className="fa-solid fa-caret-down"></i>
                            {
                                showPriceStore ?
                                    <div className='price'>
                                        <div className="arrow-filter"></div>
                                        <PriceFilter />
                                    </div>
                                    : ''
                            }
                        </div>
                        <div className="btn my_btn" onClick={showRamFilter}>
                            RAM
                            <i className="fa-solid fa-caret-down"></i>
                            {
                                showRamStore ?
                                    <div className='ram'>
                                        <div className="arrow-filter"></div>
                                        <RamFilter />
                                    </div>
                                    : ''
                            }
                        </div>
                        <div className="btn my_btn" onClick={showRomFilter}>
                            Dung lượng lưu trữ
                            <i className="fa-solid fa-caret-down"></i>
                            {
                                showRomStore ?
                                    <div className='rom'>
                                        <div className="arrow-filter"></div>
                                        <RomFilter />
                                    </div>
                                    : ''
                            }
                        </div>
                    </div>
                    <div className="filter_brand">
                    </div>
                    <div className="filter_bottom">
                        <div className="title">Chọn điện thoại theo nhu cầu:</div>
                        <div className="content">
                            <span>Chơi game/ Cấu hình cao</span>
                            <span>Chụp ảnh, quay phim</span>
                            <span>Mỏng nhẹ</span>
                            <span>Nhỏ gọn dễ cầm</span>
                        </div>
                    </div>

                </div>


                {isShowListSanPhams ?
                    <ul className="list_product">
                        {
                            listSanPhams.map((sp, index) => {
                                return (
                                    <PhienBan sp={sp} key={index} />
                                )
                            })
                        }
                    </ul>
                    : ''
                }
                {isShowListPhienBans ?
                    <ul className="list_product_phien_ban_day_du">
                        {
                            listPhienBanDayDus.map((sp, index) => {
                                return (
                                    <PhienBanDayDu sp={sp} key={index} />
                                )
                            })
                        }
                    </ul>
                    : ''
                }

            </div>
            <Footer />
        </div >
    );
}

export default DTDD;