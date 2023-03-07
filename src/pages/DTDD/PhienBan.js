
import { useState, useEffect } from 'react'
import Services from '../../services/Services'

import './PhienBan.scss'

function PhienBan(props) {

    let [indexPb, setIndexPb] = useState(0)
    let [listShow, setListShow] = useState([])
    let [showRam, setShowRam] = useState(true)


    let checkShowRam = (lists) => {
        if (lists) {
            let ram = lists[0].Ram
            lists.map((phienBan) => {
                if (phienBan.Ram != ram) {
                    setShowRam(true)
                } else {
                    setShowRam(false)
                }
            })
        }

    }

    let handleClickButtonRam = (index) => {
        setIndexPb(index)
    }

    let getAllData = async () => {
        let listShowFromServer = await Services.getPhienBanEqualMaSp(props.sp.maSp)
        checkShowRam(listShowFromServer.data)
        setListShow(listShowFromServer.data)
    }
    let checkPrice = (giaCu) => {
        let phanNguyen = parseInt(giaCu / 1000000)
        let phanDu = giaCu % 1000000
        if (phanDu > 990000) {
            phanDu = 990000
        }
        if (phanDu > 490000 && phanDu < 990000) {
            phanDu = 490000
        }
        if (phanDu < 490000) {
            phanNguyen -= 1
            phanDu = 990000
        }


        return phanNguyen * 1000000 + phanDu
    }

    useEffect(() => {
        getAllData()
    }, [])

    let text = () => {
        console.log(listShow[indexPb])
    }

    let checkGiaGiamThem = (price) => {
        let gia = price + 'đ'
        if (price > 1000000) {
            let soChia = price / 1000000
            return soChia + "TRIỆU"
        }
        return gia
    }

    let imageGiaGiamThem = process.env.REACT_APP_BACKEND_URL + '/public/image/icon3-50x50.webp'
    let imageGiaSieuHot = process.env.REACT_APP_BACKEND_URL + '/public/image/icon5-50x50.webp'

    if (listShow.length)
        return (
            <li className="product">
                <span className={listShow[indexPb].coTraGop == 'true' ? "tra_gop" : 'my_hidden'}>Trả góp 0%</span>
                <span className={listShow[indexPb].coTraGop == 'true' ? 'my_hidden' : "tra_gop bg_none"}></span>
                <div className="product_img">
                    <div className="bg_img">
                        <img src={listShow[indexPb].imgReview} />
                    </div>
                </div>


                {
                    listShow[indexPb].coGiaMoiSieuHot == 'true' ?
                        < span className="giaMoiSieuHot" onClick={text}>
                            <img src={imageGiaSieuHot} />
                            <span>
                                GIÁ MỚI SIÊU HOT
                            </span>
                        </span> : ''
                }

                {
                    listShow[indexPb].coGiamThem == 'true' ?
                        < span className="giaGiamThem" onClick={text}>
                            <img src={imageGiaGiamThem} />
                            <span>
                                GIẢM THÊM {checkGiaGiamThem(listShow[indexPb].tienGiamThem)}
                            </span>
                        </span> : ''
                }
                <div className="product_Name">{props.sp.tenSp + ' ' + props.sp.mangDiDong}</div>
                <div className="monitor">
                    <span className="size">{props.sp.kichThuocManHinh}"</span>
                    <span className="tech">{props.sp.congNgheManHinh}</span>
                </div>
                <div className='list_btn_ram_rom'>
                    {

                        listShow.map((phienBan, index) => {
                            if (listShow.length > 1)
                                return (
                                    <button key={index} onClick={(e) => { handleClickButtonRam(index) }} className={indexPb == index ? 'btn_ram_rom active' : 'btn_ram_rom'}>
                                        {showRam ? phienBan.Ram + 'GB - ' : ''}{phienBan.Rom > 1000 ? '1TB' : phienBan.Rom + 'GB'}
                                    </button >
                                )
                        })
                    }
                </div>
                <div className='price-phienban'>
                    <div className={listShow[indexPb].coGiamGia == 'true' ? 'cost line_through' : 'cost text_bold'}>
                        {
                            new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(listShow[indexPb].cost)
                        }
                    </div>
                    <span className={listShow[indexPb].coGiamGia == 'true' ? '' : 'my_hidden'}>
                        {"-" + listShow[indexPb].discount + "%"}
                    </span>
                </div>
                <div className={listShow[indexPb].coGiamGia == 'true' ? 'text_bold' : 'my_hidden'}>
                    {
                        new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(checkPrice(listShow[indexPb].cost - (listShow[indexPb].cost * listShow[indexPb].discount) / 100))
                    }
                </div>
            </li >

        )
}

export default PhienBan;