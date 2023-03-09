
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

function DTDD() {
    let [listSp, setListSp] = useState([])
    let [showMainFilter, setShowMainFilter] = useState(false)
    let [showBrandFilter, setShowBrandFilter] = useState(false)
    let [showPriceFilter, setShowPriceFilter] = useState(false)
    let [showRamFilter, setShowRamFilter] = useState(false)
    let [showRomFilter, setShowRomFilter] = useState(false)
    let [listBrands, setListBrands] = useState([])

    let [listPhienBanDayDu, setListPhienBanDayDu] = useState([])

    let [showPhienBanDayDu, setShowPhienBanDayDu] = useState(false)

    let filter = useSelector((state) => {
        return state.filters
    })

    let dispatch = useDispatch()
    let [listAfterFilter, setListAfterFilter] = useState([])
    let [listAfterFilterDayDu, setListAfterFilterDayDu] = useState([])

    let getAllData = async () => {
        let listBrandFromServer = await Services.getAllNsxDTDD()
        let listProductFromServer = await Services.getAllSanPham()
        let listPhienBanDayDuFromServer = await Services.getPhienBanDayDu()
        setListPhienBanDayDu(listPhienBanDayDuFromServer)
        setListSp(listProductFromServer)
        setListAfterFilter(listProductFromServer)
        setFilterBrandOnly(listProductFromServer)
        setListBrands(listBrandFromServer)

        dispatch({
            type: actionTypes.ADD_LIST_SAN_PHAM,
            payload: listProductFromServer
        })
        dispatch({
            type: actionTypes.ADD_LIST_SAN_PHAM_DAY_DU,
            payload: listPhienBanDayDuFromServer
        })
    }


    let setShow = (e, name) => {
        e.stopPropagation();
        switch (name) {
            case 'mainFilter':
                setShowMainFilter(true)
                setShowBrandFilter(false)
                setShowPriceFilter(false)
                setShowRamFilter(false)
                setShowRomFilter(false)
                break;
            case 'brand':
                setShowMainFilter(false)
                setShowBrandFilter(true)
                setShowPriceFilter(false)
                setShowRamFilter(false)
                setShowRomFilter(false)
                break;
            case 'price':
                setShowMainFilter(false)
                setShowPriceFilter(true)
                setShowBrandFilter(false)
                setShowRamFilter(false)
                setShowRomFilter(false)
                break;
            case 'ram':
                setShowMainFilter(false)
                setShowRamFilter(true)
                setShowBrandFilter(false)
                setShowPriceFilter(false)
                setShowRomFilter(false)
                break;
            case 'rom':
                setShowMainFilter(false)
                setShowRomFilter(true)
                setShowBrandFilter(false)
                setShowPriceFilter(false)
                setShowRamFilter(false)
                break;
        }
    }
    let closeShow = () => {
        setShowMainFilter(false)
        setShowBrandFilter(false)
        setShowPriceFilter(false)
        setShowRamFilter(false)
        setShowRomFilter(false)
    }
    let closeMainFilter = () => {
        setShowMainFilter(false)
    }

    useEffect(() => {
        getAllData()
    }, [])

    useEffect(() => {
        console.log("first filter")
        filterMain()
    }, [filter])

    let filterBrandOnly = () => {
        console.log("filter brand only")
        let listSanPham
        if (filter.brand.length) {
            listSanPham = listSp.filter((sp) => {
                for (let x of filter.brand) {
                    if (sp.maNsx == x.maNsx) {
                        return true
                    }
                }
                return false
            })
        } else {
            listSanPham = [...listSp]
        }
        return listSanPham
    }

    let filterBrand = (list) => {
        console.log("filter brand")
        let listSanPham
        if (filter.brand.length) {
            listSanPham = list.filter((sp) => {
                for (let x of filter.brand) {
                    if (sp.maNsx == x.maNsx) {
                        return true
                    }
                }
                return false
            })
        } else {
            listSanPham = [...list]
        }
        return listSanPham
    }

    let filterPrice = (list) => {
        console.log("filter price")
        let listSanPham
        for (let i = 0; i < filter.price.length; i++) {
            let dau = parseInt(filter.price[i].dau)
            let cuoi = parseInt(filter.price[i].cuoi)
            if (dau < 1000000) {
                dau = parseInt(filter.price[i].dau) * 1000000
                cuoi = parseInt(filter.price[i].cuoi) * 1000000
            }
            filter.price[i] = {
                ...filter.price[i],
                dau: dau,
                cuoi: cuoi
            }
        }
        if (filter.price.length) {
            listSanPham = list.filter((sp) => {
                let costSp = parseInt(sp.cost)
                for (let x of filter.price) {
                    if (costSp >= x.dau && costSp < x.cuoi) {
                        return true
                    }
                }
                return false
            })
        } else {
            listSanPham = [...list]
        }
        return listSanPham
    }

    let filterRam = (list) => {
        console.log('filter ram')
        let filterRam = filter.ram
        let listSanPham
        for (let i = 0; i < filterRam.length; i++) {
            filterRam[i] = {
                ...filterRam[i],
                key: parseInt(filterRam[i].key)
            }
        }
        if (filterRam.length) {
            listSanPham = list.filter((sp) => {
                let ramSp = parseInt(sp.Ram)
                for (let x of filterRam) {
                    console.log(ramSp, x)
                    if (ramSp === x.key) {
                        return true
                    }
                }
                return false
            })
        } else {
            listSanPham = [...list]
        }
        return listSanPham
    }

    let filterRom = (list) => {
        console.log('filter rom')
        let filterRom = filter.rom
        let listSanPham
        for (let i = 0; i < filterRom.length; i++) {
            filterRom[i] = {
                ...filterRom[i],
                key: parseInt(filterRom[i].key)
            }
        }
        if (filterRom.length) {
            listSanPham = list.filter((sp) => {
                let romSp = parseInt(sp.Rom)
                for (let x of filterRom) {
                    console.log(romSp, x)
                    if (romSp === x.key) {
                        return true
                    }
                }
                return false
            })
        } else {
            listSanPham = [...list]
        }
        return listSanPham
    }
    let filterMain = () => {
        console.log("filter working")
        if (filter.price.length == 0 && filter.ram.length == 0 && filter.rom.length == 0) {
            let listSanPham = filterBrandOnly()
            setListAfterFilter(listSanPham)
            setLenghtKetQua(listSanPham.length)
        } else {
            let listAfterBrand = filterBrand(listPhienBanDayDu)
            let listAfterPrice = filterPrice(listAfterBrand)
            let listAfterRam = filterRam(listAfterPrice)
            let listAfterRom = filterRom(listAfterRam)
            console.log(listAfterRom)
            setListAfterFilterDayDu(listAfterRom)
            setLenghtKetQua(listAfterRom.length)
        }
    }
    let [lengthKetQua, setLenghtKetQua] = useState(0)
    let [showFilterBrandOnly, setFilterBrandOnly] = useState([])
    let [showFilterMain, setShowFilterMain] = useState([])
    let setXemKetQua = () => {
        setFilterBrandOnly(listAfterFilter)
        setShowFilterMain(listAfterFilterDayDu)
        if (filter.price.length === 0 && filter.ram.length === 0 && filter.rom.length === 0) {
            setShowPhienBanDayDu(false)
        } else {
            setShowPhienBanDayDu(true)
        }
    }

    let setBoChon = () => {
        setShowPhienBanDayDu(false)
        setFilterBrandOnly(listSp)
    }
    return (
        <div>
            <Header />
            <div id="DTDD" onClick={() => { closeShow() }}>
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
                        <div className="btn my_btn" onClick={(e) => { setShow(e, 'mainFilter') }}>
                            <i className="fa-solid fa-filter i_mg_left"></i>
                            Bộ lọc
                            <div className='main-filter'>
                                <div className="arrow-filter"></div>
                                {showMainFilter ? <MainFilter listSps={listSp} closeMainFilter={closeMainFilter}
                                    listBrands={listBrands} setXemKetQua={setXemKetQua} lengthKetQua={lengthKetQua}
                                    setBoChon={setBoChon} /> : ''}
                            </div>
                        </div>
                        <div className="btn my_btn" onClick={(e) => { setShow(e, 'brand') }}>
                            Hãng
                            <i className="fa-solid fa-caret-down"></i>
                            <div className='brand'>
                                {showBrandFilter ? <div className="arrow-filter"></div> : ''}
                                {showBrandFilter ? <BrandFilter listBrands={listBrands} /> : ''}
                            </div>
                        </div>
                        <div className="btn my_btn" onClick={(e) => { setShow(e, 'price') }}>
                            Giá
                            <i className="fa-solid fa-caret-down"></i>

                            <div className='price'>
                                {showPriceFilter ? <div className="arrow-filter"></div> : ''}
                                {showPriceFilter ? <PriceFilter /> : ''}
                            </div>
                        </div>
                        <div className="btn my_btn" onClick={(e) => { setShow(e, 'ram') }}>
                            RAM
                            <i className="fa-solid fa-caret-down"></i>

                            <div className='ram'>
                                {showRamFilter ? <div className="arrow-filter"></div> : ''}
                                {showRamFilter ? <RamFilter /> : ''}
                            </div>
                        </div>
                        <div className="btn my_btn" onClick={(e) => { setShow(e, 'rom') }}>
                            Dung lượng lưu trữ
                            <i className="fa-solid fa-caret-down"></i>
                            <div className='rom'>
                                {showRomFilter ? <div className="arrow-filter"></div> : ''}
                                {showRomFilter ? <RomFilter /> : ''}
                            </div>
                        </div>
                    </div>
                    <div className="filter_brand">
                        {/* <BrandFilter listBrands={listBrands} /> */}
                        {/* {
                            listBrands.map((brand, index) => {
                                return (
                                    <div key={index} className="brand_img">

                                        <img src={brand.linkImg} />
                                    </div>
                                )
                            })
                        } */}
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

                {
                    !showPhienBanDayDu ?
                        <ul className="list_product">
                            {
                                showFilterBrandOnly.map((sp, index) => {
                                    return (
                                        <PhienBan sp={sp} key={index} />
                                    )
                                })
                            }
                        </ul>
                        : ''
                }

                {
                    showPhienBanDayDu ?
                        <ul className="list_product_phien_ban_day_du">
                            {
                                showFilterMain.map((sp, index) => {
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