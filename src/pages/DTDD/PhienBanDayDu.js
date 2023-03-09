
import { useState, useEffect } from 'react'
import Services from '../../services/Services'

import './PhienBanDayDu.scss'

function PhienBan(props) {
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

    let checkGiaGiamThem = (price) => {
        let gia = price + 'đ'
        if (price > 1000000) {
            let soChia = price / 1000000
            return soChia + "TRIỆU"
        }
        return gia
    }

    let chechShowRom = (rom) => {
        let newRom = parseInt(rom)
        if (newRom < 1024) {
            return rom + 'GB'
        } else {
            return parseInt(rom / 1000) + 'TB'
        }
    }

    let imageGiaGiamThem = process.env.REACT_APP_BACKEND_URL + '/public/image/icon3-50x50.webp'
    let imageGiaSieuHot = process.env.REACT_APP_BACKEND_URL + '/public/image/icon5-50x50.webp'

    return (
        <li className="product_day_du">
            <span className={props.sp.coTraGop == 'true' ? "tra_gop" : 'my_hidden'}>Trả góp 0%</span>
            <span className={props.sp.coTraGop == 'true' ? 'my_hidden' : "tra_gop bg_none"}></span>
            <div className="product_img">
                <div className="bg_img">
                    <img src={props.sp.imgReview} />
                </div>
            </div>


            {
                props.sp.coGiaMoiSieuHot == 'true' ?
                    < span className="giaMoiSieuHot" >
                        <img src={imageGiaSieuHot} />
                        <span>
                            GIÁ MỚI SIÊU HOT
                        </span>
                    </span> : ''
            }

            {
                props.sp.coGiamThem == 'true' ?
                    < span className="giaGiamThem" >
                        <img src={imageGiaGiamThem} />
                        <span>
                            GIẢM THÊM {checkGiaGiamThem(props.sp.tienGiamThem)}
                        </span>
                    </span> : ''
            }
            <div className="product_Name">{props.sp.tenSp + ' ' + props.sp.mangDiDong}</div>
            <div className="monitor">
                <span className="size">{props.sp.kichThuocManHinh}"</span>
                <span className="tech">{props.sp.congNgheManHinh}</span>
            </div>
            <div className='price-phienban'>
                <div className={props.sp.coGiamGia == 'true' ? 'cost line_through' : 'cost text_bold'}>
                    {
                        new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.sp.cost)
                    }
                </div>
                <span className={props.sp.coGiamGia == 'true' ? '' : 'my_hidden'}>
                    {"-" + props.sp.discount + "%"}
                </span>
            </div>
            <div className={props.sp.coGiamGia == 'true' ? 'text_bold' : 'my_hidden'}>
                {
                    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(checkPrice(props.sp.cost - (props.sp.cost * props.sp.discount) / 100))
                }
            </div>
            <ul className='chi_tiet'>
                <li>
                    Chip <span>{props.sp.CPU}</span>
                </li>
                <li>
                    Ram: <span>{props.sp.Ram}GB</span>
                </li>
                <li>
                    Dung lượng: <span>{chechShowRom(props.sp.Rom)}</span>
                </li>
                <li>
                    Camera sau: <span>{props.sp.doPhanGiaiCameraSau}</span>
                </li>
                <li>
                    Camera trước: <span>{props.sp.doPhanGiaiCameraTruoc}</span>
                </li>
                <li>
                    Pin: <span>{props.sp.capacityPin}</span>
                </li>
                <li>
                    Sạc: <span>{props.sp.hoTroSac}</span>
                </li>
            </ul>
        </li >

    )
}

export default PhienBan;