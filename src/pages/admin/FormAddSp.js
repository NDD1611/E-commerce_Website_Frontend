
import './FormAddSp.scss'
import { useEffect, useState } from 'react'
import Services from '../../services/Services.js'

function FormAddSp(props) {
    let listQuayPhim = [
        {
            maTn: 'FullHD_1080p@60fps',
            ten: 'FullHD 1080p@60fps',
        },
        {
            maTn: '4K_2160p@30fps',
            ten: '4K 2160p@30fps'
        },
        {
            maTn: '4K_2160p@60fps',
            ten: '4K 2160p@60fps'
        },
        {
            maTn: 'FullHD_1080p@30fps',
            ten: 'FullHD 1080p@30fps'
        },
        {
            maTn: 'FullHD_1080p@240fps',
            ten: 'FullHD 1080p@240fps'
        },
        {
            maTn: '8K_4320p@30fps',
            ten: '8K 4320p@30fps'
        },
        {
            maTn: 'HD_720p@960fps',
            ten: 'HD 720p@960fps'
        }

    ]

    let listTinhNangCamera = [
        {
            maTn: 'Quay_Sieu_Cham_Super_Slow_Motion)',
            ten: 'Quay Siêu chậm (Super Slow Motion)'
        },
        {
            maTn: 'Chuyen_Nghiep_Pro',
            ten: 'Chuyên nghiệp (Pro)'
        },
        {
            maTn: 'Tu_Dong_Lay_Net_AF',
            ten: 'Tự động lấy nét (AF)'
        },
        {
            maTn: 'HDR',
            ten: 'HDR'
        },
        {
            maTn: 'Toan_Canh_Panorama',
            ten: 'Toàn cảnh (Panorama)'
        },
        {
            maTn: 'Chong_Rung_Quang_Hoc_OIS',
            ten: 'Chống rung quang học (OIS)'
        },
        {
            maTn: 'Anh_Raw',
            ten: 'Ảnh Raw'
        },
        {
            maTn: 'Ban_Dem_Night_Mode',
            ten: 'Ban đêm (Night Mode)'
        },
        {
            maTn: 'Quay_Cham_Slow_Motion',
            ten: 'Quay chậm (Slow Motion)'
        },
        {
            maTn: 'Troi_Nhanh_Thoi_Gian_Time_Lapse',
            ten: 'Trôi nhanh thời gian (Time Lapse)'
        },
        {
            maTn: 'Xoa_Phong',
            ten: 'Xóa phông'
        },
        {
            maTn: 'Zoom_Quang_Hoc',
            ten: 'Zoom quang học'
        },
        {
            maTn: 'Lam_Dep',
            ten: 'Làm đẹp'
        },
        {
            maTn: 'Goc_Rong_Wide',
            ten: 'Góc rộng (Wide)'
        },
        {
            maTn: 'Zoom_Ky_Thuat_So',
            ten: 'Zoom kỹ thuật số'
        },
        {
            maTn: 'Goc_Sieu_Rong_Ultrawide',
            ten: 'Góc siêu rộng (Ultrawide)'
        },
        {
            maTn: 'Live_Photo',
            ten: 'Live Photo'
        },
        {
            maTn: 'Bo_Loc_Mau',
            ten: 'Bộ lọc màu'
        },
        {
            maTn: 'Nhan_Dan_AR_Stickers',
            ten: 'Nhãn dán (AR Stickers)'
        },
        {
            maTn: 'Quay_Video_4K',
            ten: 'Quay video 4K'
        },
        {
            maTn: 'Nhan_Dien_Khuon_Mat',
            ten: 'Nhận diện khuôn mặt'
        },
        {
            maTn: 'Quay_Video_Full_HD',
            ten: 'Quay video Full HD'
        },
        {
            maTn: 'Quay_Video_HD',
            ten: 'Quay video HD'
        },
        {
            maTn: 'Chup_Dem',
            ten: 'Chụp đêm'
        },
    ]
    let listWifi = [
        {
            maWf: 'Dual_Band',
            ten: 'Dual-band (2.4 GHz/5 GHz)'
        },
        {
            maWf: 'WiFi_Direct',
            ten: 'Wi-Fi Direct'
        },
        {
            maWf: 'WiFi_802.11',
            ten: 'Wi-Fi 802.11 a/b/g/n/ac/ax'
        },
        {
            maWf: '6_GHz',
            ten: '6 GHz'
        },
    ]

    let listGPS = [
        {
            maGPS: 'GLONASS',
            ten: 'GLONASS'
        },
        {
            maGPS: 'GPS',
            ten: 'GPS'
        },
        {
            maGPS: 'GALILEO',
            ten: 'GALILEO'
        },
        {
            maGPS: 'BEIDOU',
            ten: 'BEIDOU'
        },
    ]
    let listCongNghePin = [
        {
            maCn: 'Sac_Khong_Day',
            ten: 'Sạc không dây'
        },
        {
            maCn: 'Sac_Pin_Nhanh',
            ten: 'Sạc pin nhanh'
        },
        {
            maCn: 'Sac_Nguoc_Khong_Day',
            ten: 'Sạc ngược không dây'
        },
    ]
    let listTinhNangDacBiet = [
        {
            maTn: 'che_Do_Don_Gian',
            ten: 'Chế độ đơn giản (Giao diện đơn giản)'
        },
        {
            maTn: 'Samsung_Bixby',
            ten: 'Trợ lý ảo Samsung Bixby'
        },
        {
            maTn: 'Cham_2_Lan_Tang_Sang',
            ten: 'Chạm 2 lần tắt/sáng màn hình'
        },
        {
            maTn: 'Chan_Cuoc_Goi',
            ten: 'Chặn cuộc gọi'
        },
        {
            maTn: 'Chan_Tin_Nhan',
            ten: 'Chặn tin nhắn'
        },
        {
            maTn: 'Thu_Nho_Man_Hinh_1_Tay',
            ten: 'Thu nhỏ màn hình sử dụng một tay'
        },
        {
            maTn: 'Samsung_Pay',
            ten: 'Samsung Pay'
        },
        {
            maTn: 'Luon_Hien_Thi_AOD',
            ten: 'Màn hình luôn hiển thị AOD'
        },
        {
            maTn: 'Google_Assistant',
            ten: 'Trợ lý ảo Google Assistant'
        },
        {
            maTn: 'Am _Thanh_AKG',
            ten: 'Âm thanh AKG'
        },
        {
            maTn: 'Da_Cua_So',
            ten: 'Đa cửa sổ (chia đôi màn hình)'
        },
        {
            maTn: 'Samsung_DeX',
            ten: 'Samsung DeX (Kết nối màn hình sử dụng giao diện tương tự PC)'
        },
        {
            maTn: 'Khong_Gian_Thu_2',
            ten: 'Không gian thứ hai'
        },
        {
            maTn: 'Loa_Kep',
            ten: 'Loa kép'
        },
        {
            maTn: 'Game_Booster',
            ten: 'Tối ưu game (Game Booster)'
        },
        {
            maTn: 'Samsung_Kids',
            ten: 'Chế độ trẻ em (Samsung Kids)'
        },
        {
            maTn: 'Mo_Rong_Ram',
            ten: 'Mở rộng bộ nhớ RAM'
        },
        {
            maTn: 'Dolby_Atmos',
            ten: 'Âm thanh Dolby Atmos'
        },
    ]

    let listNgheNhac = [
        {
            maTn: 'MP3',
            ten: 'MP3'
        },
        {
            maTn: '3GP',
            ten: '3GP'
        },
        {
            maTn: 'AVI',
            ten: 'AVI'
        },
        {
            maTn: 'MKV',
            ten: 'MKV'
        },
        {
            maTn: 'FLV',
            ten: 'FLV'
        },
        {
            maTn: 'CO',
            ten: 'Có'
        }
    ]

    let listXemPhim = [
        {
            maTn: 'WAV',
            ten: 'WAV'
        },
        {
            maTn: 'AAC',
            ten: 'AAC'
        },
        {
            maTn: 'OGG',
            ten: 'OGG'
        },
        {
            maTn: 'MP3',
            ten: 'MP3'
        },
        {
            maTn: 'AMR',
            ten: 'AMR'
        },
        {
            maTn: 'FLV',
            ten: 'FLV'
        },
        {
            maTn: 'Midi',
            ten: 'Midi'
        },
        {
            maTn: 'MA4',
            ten: 'MA4'
        }, ,
        {
            maTn: 'CO',
            ten: 'Có'
        }
    ]


    let cpmpareString = (a, b) => {
        if (a.ten < b.ten) {
            return -1;
        }
        if (a.ten > b.ten) {
            return 1;
        }
        return 0;
    }

    listQuayPhim.sort(cpmpareString)
    listTinhNangCamera.sort(cpmpareString)
    listWifi.sort(cpmpareString)
    listGPS.sort(cpmpareString)
    listCongNghePin.sort(cpmpareString)
    listTinhNangDacBiet.sort(cpmpareString)
    listNgheNhac.sort(cpmpareString)
    listXemPhim.sort(cpmpareString)

    let [data, setData] = useState({
        maSp: '',
        tenSp: '',
        maNsx: '',
        loaiDT: '',
        linkInfo: '',
        kichThuocManHinh: '',
        congNgheManHinh: '',
        tamNenManHinh: '',
        doPhanGiai: '',
        tanSoQuet: '',
        doSangToiDa: '',
        matCamUng: '',
        doPhanGiaiCameraSau: '',
        denFlash: '',
        listQp: [],
        listTinhNangCameraSau: [],
        listOptWifi: [],
        listOptGPS: [],
        listOptCongNghePin: [],
        listOptNgheNhac: [],
        listOptXemPhim: [],
        listOptTNDacBiet: [],
        listTinhNangCameraTruoc: [],
        doPhanGiaiCameraTruoc: '',
        heDieuHanh: '',
        CPU: '',
        tocDoCPU: '',
        GPU: '',
        RomConLai: '',
        danhBa: 'Không giới hạn',
        mangDiDong: '',
        sim: '',
        blueTooth: '',
        connectGate: '',
        jackHeadPhone: '',
        connectOther: '',
        capacityPin: '',
        loaiPin: 'Li-on',
        hoTroSac: '',
        baoMat: '',
        khangNuoc: '',
        ghiAm: '',
        thietKe: 'Nguyên khối',
        chatLieu: '',
        chieuDai: '175.3',
        chieuNgang: '76.2',
        doDay: '8.2',
        trongLuong: '194',
        thoiDiemRaMat: '',
    })
    // let [listMaSp, setListMaSp] = useState([])
    let [listQp, setListQp] = useState([])
    let [listTinhNangCameraSau, setListTinhNangCameraSau] = useState([])
    let [listTinhNangCameraTruoc, setListTinhNangCameraTruoc] = useState([])
    let [listOptWifi, setListOptWifi] = useState([])
    let [listOptGPS, setListOptGPS] = useState([])
    let [listOptCongNghePin, setListOptCongNghePin] = useState([])
    let [listOptXemPhim, setListOptXemPhim] = useState([])
    let [listOptNgheNhac, setListOptNgheNhac] = useState([])
    let [listOptTNDacBiet, setListOptTNDacBiet] = useState([])
    let [listNsx, setListNsx] = useState([])

    let handleChangeInputAll = (e, field) => {
        let { value } = e.target
        let copyData = { ...data }
        copyData[field] = value
        console.log("add data", copyData)
        setData(copyData)
    }

    let handleAddData = async () => {
        let copyData = {
            ...data,
            listQp: JSON.stringify(data.listQp),
            listTinhNangCameraSau: JSON.stringify(data.listTinhNangCameraSau),
            listOptWifi: JSON.stringify(data.listOptWifi),
            listOptGPS: JSON.stringify(data.listOptGPS),
            listOptCongNghePin: JSON.stringify(data.listOptCongNghePin),
            listOptNgheNhac: JSON.stringify(data.listOptNgheNhac),
            listOptXemPhim: JSON.stringify(data.listOptXemPhim),
            listOptTNDacBiet: JSON.stringify(data.listOptTNDacBiet),
            listTinhNangCameraTruoc: JSON.stringify(data.listTinhNangCameraTruoc)
        }
        console.log(copyData)
        let result = await Services.addNewSanPham(copyData)
        setData({
            maSp: '',
            tenSp: '',
            maNsx: '',
            loaiDT: '',
            linkInfo: '',
            kichThuocManHinh: '',
            congNgheManHinh: '',
            tamNenManHinh: '',
            doPhanGiai: '',
            tanSoQuet: '',
            doSangToiDa: '',
            matCamUng: '',
            doPhanGiaiCameraSau: '',
            denFlash: '',
            listQp: [],
            listTinhNangCameraSau: [],
            listOptWifi: [],
            listOptGPS: [],
            listOptCongNghePin: [],
            listOptNgheNhac: [],
            listOptXemPhim: [],
            listOptTNDacBiet: [],
            listTinhNangCameraTruoc: [],
            doPhanGiaiCameraTruoc: '',
            heDieuHanh: '',
            CPU: '',
            tocDoCPU: '',
            GPU: '',
            RomConLai: '',
            danhBa: '',
            mangDiDong: '',
            sim: '',
            blueTooth: '',
            connectGate: '',
            jackHeadPhone: '',
            connectOther: '',
            capacityPin: '',
            loaiPin: '',
            hoTroSac: '',
            baoMat: '',
            khangNuoc: '',
            ghiAm: '',
            thietKe: '',
            chatLieu: '',
            chieuDai: '',
            chieuNgang: '',
            doDay: '',
            trongLuong: '',
            thoiDiemRaMat: '',
        })
        console.log(result)
    }

    let handleChangeCheckBox_QuayPhim = (e, tinhNang) => {
        let { value, checked } = e.target
        let copyListQp = [...listQp]
        if (checked) {
            copyListQp.push(tinhNang)
        } else {
            copyListQp = copyListQp.filter((oneTinhNang) => {
                return oneTinhNang.maTn !== value
            })
        }
        setListQp(copyListQp)
        setData({
            ...data,
            listQp: copyListQp
        })
    }

    let handleChangeCheckBox_CameraTruoc = (e, tinhNang) => {
        let { value, checked } = e.target
        let copyListTinhNangCameraTruoc = [...listTinhNangCameraTruoc]
        if (checked) {
            copyListTinhNangCameraTruoc.push(tinhNang)
        } else {
            copyListTinhNangCameraTruoc = copyListTinhNangCameraTruoc.filter((oneTinhNang) => {
                return oneTinhNang.maTn !== value
            })
        }
        setListTinhNangCameraTruoc(copyListTinhNangCameraTruoc)
        setData({
            ...data,
            listTinhNangCameraTruoc: copyListTinhNangCameraTruoc
        })
    }

    let handleChangeCheckBox_CameraSau = (e, tinhNang) => {
        let { value, checked } = e.target
        let copyListTinhNangCameraSau = [...listTinhNangCameraSau]
        if (checked) {
            copyListTinhNangCameraSau.push(tinhNang)
        } else {
            copyListTinhNangCameraSau = copyListTinhNangCameraSau.filter((oneTinhNang) => {
                return oneTinhNang.maTn !== value
            })
        }
        setListTinhNangCameraSau(copyListTinhNangCameraSau)
        setData({
            ...data,
            listTinhNangCameraSau: copyListTinhNangCameraSau
        })
    }

    let handleChangeCheckBox_Wifi = (e, opt) => {
        let { value, checked } = e.target
        let copylistWifi = [...listOptWifi]
        if (checked) {
            copylistWifi.push(opt)
        } else {
            copylistWifi = copylistWifi.filter((oneOpt) => {
                return oneOpt.maWf !== value
            })
        }
        setListOptWifi(copylistWifi)
        setData({
            ...data,
            listOptWifi: copylistWifi
        })
    }

    let handleChangeCheckBox_GPS = (e, opt) => {
        let { value, checked } = e.target
        let copylistGPS = [...listOptGPS]
        if (checked) {
            copylistGPS.push(opt)
        } else {
            copylistGPS = copylistGPS.filter((oneOpt) => {
                return oneOpt.maGPS !== value
            })
        }
        setListOptGPS(copylistGPS)
        setData({
            ...data,
            listOptGPS: copylistGPS
        })
    }

    let handleChangeCheckBox_CnPin = (e, opt) => {
        let { value, checked } = e.target
        let copyListOptCongNghePin = [...listOptCongNghePin]
        if (checked) {
            copyListOptCongNghePin.push(opt)
        } else {
            copyListOptCongNghePin = copyListOptCongNghePin.filter((oneOpt) => {
                return oneOpt.maCn !== value
            })
        }
        setListOptCongNghePin(copyListOptCongNghePin)
        setData({
            ...data,
            listOptCongNghePin: copyListOptCongNghePin
        })
    }

    let handleChangeCheckBox_XemPhim = (e, opt) => {
        let { value, checked } = e.target
        let copyListOptXemPhim = [...listOptXemPhim]
        if (checked) {
            copyListOptXemPhim.push(opt)
        } else {
            copyListOptXemPhim = copyListOptXemPhim.filter((oneOpt) => {
                return oneOpt.maTn !== value
            })
        }
        setListOptXemPhim(copyListOptXemPhim)
        setData({
            ...data,
            listOptXemPhim: copyListOptXemPhim
        })
    }
    let handleChangeCheckBox_NgheNhac = (e, opt) => {
        let { value, checked } = e.target
        let copyListOptNgheNhac = [...listOptNgheNhac]
        if (checked) {
            copyListOptNgheNhac.push(opt)
        } else {
            copyListOptNgheNhac = copyListOptNgheNhac.filter((oneOpt) => {
                return oneOpt.maTn !== value
            })
        }
        setListOptNgheNhac(copyListOptNgheNhac)
        setData({
            ...data,
            listOptNgheNhac: copyListOptNgheNhac
        })
    }

    let handleChangeCheckBox_TinhNangDacBiet = (e, opt) => {
        let { value, checked } = e.target
        let copyListOptTNDacBiet = [...listOptTNDacBiet]
        if (checked) {
            copyListOptTNDacBiet.push(opt)
        } else {
            copyListOptTNDacBiet = copyListOptTNDacBiet.filter((oneOpt) => {
                return oneOpt.maTn !== value
            })
        }
        setListOptTNDacBiet(copyListOptTNDacBiet)
        setData({
            ...data,
            listOptTNDacBiet: copyListOptTNDacBiet
        })
    }

    let handleChangeSelectNsx = (e) => {
        setData({
            ...data,
            maNsx: e.target.value
        })
    }
    let handleChangeSelectLoaiDT = (e) => {
        setData({
            ...data,
            loaiDT: e.target.value
        })
    }

    let getAllNsx = async () => {
        let listNsx = await Services.getAllNsxDTDD()
        setData({
            ...data,
            maNsx: listNsx[0].maNsx,
            loaiDT: 'ANDROID'
        })
        setListNsx(listNsx)
    }

    useEffect(() => {
        getAllNsx()
    }, [])


    return (
        <div id="PHIENBAN">
            <div className="my_modal">
                <button className="btn btn_hide_form" onClick={props.handleCloseForm}>
                    Close
                </button>
                <div className='info_product'>
                    <div className='bg_f1'>Thông tin sản phẩm</div>
                    <div className='label_input'>
                        <label>Mã sản phẩm:</label>
                        <input type="text" value={data.maSp} onChange={(e) => { handleChangeInputAll(e, "maSp") }} placeholder="Masp..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Tên sản phẩm:</label>
                        <input type="text" value={data.tenSp} onChange={(e) => { handleChangeInputAll(e, "tenSp") }} placeholder="tenSp..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Nhà sản xuất:</label>
                        {/* <input type="text" value={data.tenSp} onChange={(e) => { handleChangeInputAll(e, "tenSp") }} placeholder="tenSp..."></input> */}
                        <select value={data.maNsx} onChange={(e) => handleChangeSelectNsx(e)}>
                            {
                                listNsx.map((nsx, index) => {
                                    return (
                                        <option key={index} value={nsx.maNsx}>{nsx.tenNsx}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='label_input'>
                        <label>Loại điện thoại:</label>
                        {/* <input type="text" value={data.tenSp} onChange={(e) => { handleChangeInputAll(e, "tenSp") }} placeholder="tenSp..."></input> */}
                        <select value={data.loaiDT} onChange={(e) => handleChangeSelectLoaiDT(e)}>
                            <option value='ANDROID'>Android</option>
                            <option value='IOS'>IOS</option>
                            <option value='DTTT'>Điện thoại thông thường</option>
                        </select>
                    </div>

                    <div className='label_input'>
                        <label>Link ảnh mô tả chi tiết sản phẩm:</label>
                        <input type="text" value={data.linkInfo} onChange={(e) => { handleChangeInputAll(e, "linkInfo") }} placeholder="Link ảnh..."></input>
                    </div>
                </div>
                <div className="monitor">
                    <div className='bg_f1'>Màn Hình</div>
                    <div className='label_input'>
                        <label>Công nghệ màn hình:</label>
                        <input type="text" value={data.congNgheManHinh} onChange={(e) => { handleChangeInputAll(e, "congNgheManHinh") }} placeholder="Công nghệ màn hình..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Tấm nền màn hình:</label>
                        <input type="text" value={data.tamNenManHinh} onChange={(e) => { handleChangeInputAll(e, "tamNenManHinh") }} placeholder="Tấm Nền màn hình..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Độ phân giải:</label>
                        <input type="text" value={data.doPhanGiai} onChange={(e) => { handleChangeInputAll(e, "doPhanGiai") }} placeholder="Độ phân giải..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Kich thước màn hình (inch):</label>
                        <input type="text" value={data.kichThuocManHinh} onChange={(e) => { handleChangeInputAll(e, "kichThuocManHinh") }} placeholder="Kích thước màn hình..." ></input>
                    </div>
                    <div className='label_input'>
                        <label>Tần số quét (Hz):</label>
                        <input type="text" value={data.tanSoQuet} onChange={(e) => { handleChangeInputAll(e, "tanSoQuet") }} placeholder="Tần số quét..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Độ sáng tối đa (nils):</label>
                        <input type="text" value={data.doSangToiDa} onChange={(e) => { handleChangeInputAll(e, "doSangToiDa") }} placeholder="Độ sáng tối đa..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Mặt cảm ứng:</label>
                        <input type="text" value={data.matCamUng} onChange={(e) => { handleChangeInputAll(e, "matCamUng") }} placeholder="Mặt cảm ứng..."></input>
                    </div>
                </div>
                <div className="camera_sau">
                    <div className='bg_f1'>Camera sau</div>
                    <div className='label_input'>
                        <label>Độ phân giải:</label>
                        <input type="text" value={data.doPhanGiaiCameraSau} onChange={(e) => { handleChangeInputAll(e, "doPhanGiaiCameraSau") }} placeholder="Độ phân giải camera sau..."></input>
                    </div>
                    <div className='label_input'>
                        <div className='label_input'>Quay phim:</div>
                        <div className="list_tinh_nang">
                            {
                                listQuayPhim.map((tinhNang, index) => {
                                    return (
                                        <div key={index}>
                                            <input type='checkbox' onChange={(e) => handleChangeCheckBox_QuayPhim(e, tinhNang)} id={tinhNang.maTn} name={tinhNang.maTn} value={tinhNang.maTn}></input>
                                            <label htmlFor={tinhNang.maTn}>{tinhNang.ten}</label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='label_input' >
                        <label>Đèn flash:</label>
                        <input id='denFlashCo' type='radio' defaultChecked={data.denFlash == 'true'} value="true" name="denFlash" onChange={(e) => { handleChangeInputAll(e, "denFlash") }} />
                        <label className="label_flash label_radio" htmlFor="denFlashCo">Có</label>
                        <input id='denFlashKhong' type='radio' defaultChecked={data.denFlash == 'false'} value="false" name="denFlash" onChange={(e) => { handleChangeInputAll(e, "denFlash") }} />
                        <label className="label_flash label_radio" htmlFor="denFlashKhong">Không</label>
                    </div>

                    <div className='label_input'>
                        <div className='label_input'>Tính năng:</div>
                        <div className="list_tinh_nang">
                            {
                                listTinhNangCamera.map((tinhNang, index) => {
                                    return (
                                        <div key={index}>
                                            <input type='checkbox' onChange={(e) => handleChangeCheckBox_CameraSau(e, tinhNang)} id={tinhNang.maTn + 'camera_sau'} name={tinhNang.maTn} value={tinhNang.maTn}></input>
                                            <label htmlFor={tinhNang.maTn + 'camera_sau'}>{tinhNang.ten}</label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='camera_truoc'>
                    <div className='bg_f1'>Camera trước</div>
                    <div className='label_input'>
                        <label>Độ phân giải:</label>
                        <input type="text" value={data.doPhanGiaiCameraTruoc} onChange={(e) => { handleChangeInputAll(e, "doPhanGiaiCameraTruoc") }} placeholder="Độ phân giải camera trước..."></input>
                    </div>

                    <div className='label_input'>
                        <label>Tính Năng:</label>
                        <div className="list_tinh_nang">
                            {
                                listTinhNangCamera.map((tinhNang, index) => {
                                    return (
                                        <div key={index}>
                                            <input type='checkbox' onChange={(e) => handleChangeCheckBox_CameraTruoc(e, tinhNang)} id={tinhNang.maTn + 'camera_truoc'} name={tinhNang.maTn} value={tinhNang.maTn}></input>
                                            <label htmlFor={tinhNang.maTn + 'camera_truoc'}>{tinhNang.ten}</label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="HDH_CPU">
                    <div className='bg_f1'>Hệ điều hành & CPU</div>

                    <div className='label_input'>
                        <label>Hệ điều hành:</label>
                        <input type="text" value={data.heDieuHanh} onChange={(e) => { handleChangeInputAll(e, "heDieuHanh") }} placeholder="Hệ điều hành..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Chip xử lý (CPU):</label>
                        <input type="text" value={data.CPU} onChange={(e) => { handleChangeInputAll(e, "CPU") }} placeholder="Chip xử lý CPU..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Tốc độ CPU:</label>
                        <input type="text" value={data.tocDoCPU} onChange={(e) => { handleChangeInputAll(e, "tocDoCPU") }} placeholder="Tốc độ CPU..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Chip đồ họa (GPU):</label>
                        <input type="text" value={data.GPU} onChange={(e) => { handleChangeInputAll(e, "GPU") }} placeholder="Chip đồ họa GPU..."></input>
                    </div>
                </div>

                <div className="RAM_ROM">
                    <div className='bg_f1'>Bộ nhớ & Lưu trữ</div>

                    <div className='label_input'>
                        <label>Danh bạ:</label>
                        <input type="text" value={data.danhBa} onChange={(e) => { handleChangeInputAll(e, "danhBa") }} placeholder="Danh bạ..."></input>
                    </div>
                </div>

                <div className="connect">
                    <div className='bg_f1'>Kết nối</div>

                    <div className='label_input'>
                        <label>Mạng di động:</label>
                        <input type="text" value={data.mangDiDong} onChange={(e) => { handleChangeInputAll(e, "mangDiDong") }} placeholder="Mạng di động..."></input>
                    </div>
                    <div className='label_input'>
                        <label>SIM :</label>
                        <input type="text" value={data.sim} onChange={(e) => { handleChangeInputAll(e, "sim") }} placeholder="sim..."></input>
                    </div>
                    <div className='label_input'>
                        <div className='label_input'>Wifi:</div>
                        <div className="list_tinh_nang">
                            {
                                listWifi.map((opt, index) => {
                                    return (
                                        <div key={index}>
                                            <input type='checkbox' onChange={(e) => handleChangeCheckBox_Wifi(e, opt)} id={opt.maWf + 'WF'} value={opt.maWf}></input>
                                            <label htmlFor={opt.maWf + 'WF'}>{opt.ten}</label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='label_input'>
                        <div className='label_input'>GPS:</div>
                        <div className="list_tinh_nang">
                            {
                                listGPS.map((opt, index) => {
                                    return (
                                        <div key={index}>
                                            <input type='checkbox' onChange={(e) => handleChangeCheckBox_GPS(e, opt)} id={opt.maGPS + 'GPS'} value={opt.maGPS}></input>
                                            <label htmlFor={opt.maGPS + 'GPS'}>{opt.ten}</label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className='label_input'>
                        <label>Bluetooth :</label>
                        <input type="text" value={data.blueTooth} onChange={(e) => { handleChangeInputAll(e, "blueTooth") }} placeholder="Bluetooth..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Cổng kết nối/sạc:</label>
                        <input type="text" value={data.connectGate} onChange={(e) => { handleChangeInputAll(e, "connectGate") }} placeholder="Cổng kết nối/sạc"></input>
                    </div>
                    <div className='label_input'>
                        <label>Jack tai nghe:</label>
                        <input type="text" value={data.jackHeadPhone} onChange={(e) => { handleChangeInputAll(e, "jackHeadPhone") }} placeholder="Jack tai nghe:"></input>
                    </div>
                    <div className='label_input'>
                        <label>Kết nối khác:</label>
                        <input type="text" value={data.connectOther} onChange={(e) => { handleChangeInputAll(e, "connectOther") }} placeholder="Kết nối khác:"></input>
                    </div>
                </div>

                <div className="pin">
                    <div className='bg_f1'>Pin & Sạc:</div>
                    <div className='label_input'>
                        <label>Dung lượng pin:</label>
                        <input type="text" value={data.capacityPin} onChange={(e) => { handleChangeInputAll(e, "capacityPin") }} placeholder="Dung lượng Pin..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Loại pin:</label>
                        <input type="text" value={data.loaiPin} onChange={(e) => { handleChangeInputAll(e, "loaiPin") }} placeholder="Loại Pin..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Hỗ trợ sạc tối đa:</label>
                        <input type="text" value={data.hoTroSac} onChange={(e) => { handleChangeInputAll(e, "hoTroSac") }} placeholder="Hỗ trợ sạc..."></input>
                    </div>
                    <div className='label_input'>
                        <div className='label_input'>Công nghệ pin:</div>
                        <div className="list_tinh_nang">
                            {
                                listCongNghePin.map((opt, index) => {
                                    return (
                                        <div key={index}>
                                            <input type='checkbox' onChange={(e) => handleChangeCheckBox_CnPin(e, opt)} id={opt.maCn + 'CNP'} value={opt.maCn}></input>
                                            <label htmlFor={opt.maCn + "CNP"}>{opt.ten}</label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="tien_ich">
                    <div className='bg_f1'>Tiện ích:</div>
                    <div className='label_input'>
                        <label>Bảo mật nâng cao:</label>
                        <input type="text" value={data.baoMat} onChange={(e) => { handleChangeInputAll(e, "baoMat") }} placeholder="Bảo mật nâng cao..."></input>
                    </div>
                    <div className='label_input'>
                        <div className='label_input'>Tính năng đặc biệt:</div>
                        <div className="list_tinh_nang">
                            {
                                listTinhNangDacBiet.map((opt, index) => {
                                    return (
                                        <div key={index}>
                                            <input type='checkbox' onChange={(e) => handleChangeCheckBox_TinhNangDacBiet(e, opt)} id={opt.maTn + 'TNDB'} value={opt.maTn}></input>
                                            <label htmlFor={opt.maTn + 'TNDB'}>{opt.ten}</label>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='label_input'>
                        <label>Kháng nước, bụi:</label>
                        <input type="text" value={data.khangNuoc} onChange={(e) => { handleChangeInputAll(e, "khangNuoc") }} placeholder="Chuẩn kháng nước..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Ghi âm:</label>
                        <input type="text" value={data.ghiAm} onChange={(e) => { handleChangeInputAll(e, "ghiAm") }} placeholder="Ghi Âm..."></input>
                    </div>
                    <div className='label_input'>
                        <div className='label_input'>
                            <div className='label_input'>Xem phim:</div>
                            <div className="list_tinh_nang">
                                {
                                    listXemPhim.map((opt, index) => {
                                        return (
                                            <div key={index}>
                                                <input type='checkbox' onChange={(e) => handleChangeCheckBox_XemPhim(e, opt)} id={opt.maTn + 'xemphim'} value={opt.maTn}></input>
                                                <label htmlFor={opt.maTn + 'xemphim'}>{opt.ten}</label>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='label_input'>
                        <div className='label_input'>
                            <div className='label_input'>Nghe nhạc:</div>
                            <div className="list_tinh_nang">
                                {
                                    listNgheNhac.map((opt, index) => {
                                        return (
                                            <div key={index}>
                                                <input type='checkbox' onChange={(e) => handleChangeCheckBox_NgheNhac(e, opt)} id={opt.maTn + 'nghenhac'} value={opt.maTn}></input>
                                                <label htmlFor={opt.maTn + 'nghenhac'}>{opt.ten}</label>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tien_ich">
                    <div className='bg_f1'>Thông tin chung:</div>
                    <div className='label_input'>
                        <label>Thiết kế:</label>
                        <input type="text" value={data.thietKe} onChange={(e) => { handleChangeInputAll(e, "thietKe") }} placeholder="Thiết kế..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Chất liệu:</label>
                        <input type="text" value={data.chatLieu} onChange={(e) => { handleChangeInputAll(e, "chatLieu") }} placeholder="Chất liệu..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Kích thước chiều dài (mm):</label>
                        <input type="number" step='0.01' value={data.chieuDai} onChange={(e) => { handleChangeInputAll(e, "chieuDai") }} placeholder="Kích thước..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Kích thước chiều ngang (mm):</label>
                        <input type="number" step='0.01' value={data.chieuNgang} onChange={(e) => { handleChangeInputAll(e, "chieuNgang") }} placeholder="Kích thước..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Kích thước độ dầy (mm):</label>
                        <input type="number" step='0.01' value={data.doDay} onChange={(e) => { handleChangeInputAll(e, "doDay") }} placeholder="Kích thước..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Kích thước trọng lượng (g):</label>
                        <input type="number" step='0.01' value={data.trongLuong} onChange={(e) => { handleChangeInputAll(e, "trongLuong") }} placeholder="Kích thước..."></input>
                    </div>
                    <div className='label_input'>
                        <label>Thời điểm ra mắt:</label>
                        <input type="date" value={data.thoiDiemRaMat} onChange={(e) => { handleChangeInputAll(e, "thoiDiemRaMat") }} placeholder="thời điểm ra mắt..."></input>
                    </div>
                </div>
                <div className='btn btn-primary' onClick={handleAddData}>Save</div>
            </div >


        </div >
    )
}

export default FormAddSp;