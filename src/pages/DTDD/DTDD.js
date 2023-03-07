
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
import { useSelector } from "react-redux";
import MainFilter from "./filters/MainFilter.js";

function DTDD() {
    let [listSp, setListSp] = useState([])
    let [showMainFilter, setShowMainFilter] = useState(false)
    let [showBrandFilter, setShowBrandFilter] = useState(false)
    let [showPriceFilter, setShowPriceFilter] = useState(false)
    let [showRamFilter, setShowRamFilter] = useState(false)
    let [showRomFilter, setShowRomFilter] = useState(false)
    let [listBrands, setListBrands] = useState([])
    let [listShowProduct, setListShowProduct] = useState([])
    let [listPhienBanDayDu, setListPhienBanDayDu] = useState([])

    let filter = useSelector((state) => {
        return state.filters
    })

    let listBrandFromStore = filter.brand
    let listPriceFromStore = filter.price
    let listRamFromStore = filter.ram
    let listRomFromStore = filter.rom
    let [listAfterFilter, setListAfterFilter] = useState([])

    let getAllData = async () => {
        let listBrandFromServer = await Services.getAllNsxDTDD()
        let listProductFromServer = await Services.getAllSanPham()
        let listPhienBanDayDuFromServer = await Services.getPhienBanDayDu()
        setListPhienBanDayDu(listPhienBanDayDuFromServer)
        setListSp(listProductFromServer)
        setListAfterFilter(listProductFromServer)
        setListShowProduct(listProductFromServer)
        setListBrands(listBrandFromServer)
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
    let closeMainFilter = (e) => {
        e.stopPropagation();
        setShowMainFilter(false)
    }

    useEffect(() => {
        getAllData()
    }, [])

    useEffect(() => {
        filterMain()
    }, [filter])

    let filterBrand = () => {
        console.log("filter brand")
        let listSanPham
        if (listBrandFromStore.length) {
            listSanPham = listSp.filter((sp) => {
                for (let x of listBrandFromStore) {
                    if (sp.maNsx == x.maNsx) {
                        return true
                    }
                }
                return false
            })
        } else {
            listSanPham = [...listSp]
        }
        setListAfterFilter(listSanPham)
    }

    let filterPrice = () => {
        console.log("filter price")
        let listSanPham
        for (let i = 0; i < listPriceFromStore.length; i++) {
            let dau = parseInt(listPriceFromStore[i].dau) * 1000000
            let cuoi = parseInt(listPriceFromStore[i].cuoi) * 1000000
            listPriceFromStore[i] = {
                ...listPriceFromStore[i],
                dau: dau,
                cuoi: cuoi
            }
        }
        if (listPriceFromStore.length) {
            listSanPham = listSp.filter((sp) => {
                for (let x of listPriceFromStore) {
                    if (sp.maNsx == x.maNsx) {
                        return true
                    }
                }
                return false
            })
        } else {
            listSanPham = [...listSp]
        }
        setListAfterFilter(listSanPham)
    }

    let filterRam = () => {

    }
    let filterRom = () => {

    }
    let filterMain = () => {
        console.log("filter working")
        filterBrand()
        filterPrice()
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
                                {showMainFilter ? <MainFilter listSps={listSp} closeMainFilterFunc={closeMainFilter} listBrands={listBrands} /> : ''}
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

                <ul className="list_product">
                    {
                        listAfterFilter.map((sp, index) => {
                            return (
                                <PhienBan sp={sp} key={index} />
                            )
                        })
                    }
                </ul>
                <ul className="list_product_phien_ban_day_du">
                    {
                        listPhienBanDayDu.map((sp, index) => {
                            return (
                                <PhienBanDayDu sp={sp} key={index} />
                            )
                        })
                    }
                </ul>
            </div>
            <Footer />
        </div >
    );
}

export default DTDD;