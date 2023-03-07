
import './FormAddPhienBan.scss'
import Services from '../../services/Services.js'

import Action from '../../redux/actions'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function ListSanPham(props) {

    let dispatch = useDispatch()

    let [data, setData] = useState({
        maSp: '',
        imgReview: '',
        coTraGop: "true",
        cost: '',
        coGiamGia: "true",
        discount: '',
        Ram: '',
        Rom: '',
        RomConLai: '',
        baoHanh: '12',
        coGiaMoiSieuHot: 'false',
        giaMoi: '',
        coGiamThem: 'false',
        tienGiamThem: ''
    })

    let [dataSanPham, setDataSanPham] = useState({})

    let handleChangeInputAll = (e, field) => {
        let { value } = e.target
        let copyData = { ...data }
        copyData[field] = value
        console.log("add data", copyData)
        setData(copyData)
    }

    let handleSaveData = async () => {
        let copyData = {
            ...data,
            maSp: props.maSp

        }
        let res = await Services.addNewPhienBan(copyData)
        console.log(res)
    }

    let handleClickAddPhienBan = (sp) => {
        setDataSanPham(sp)
    }

    return (
        <div id="FormAddPhienBan">
            <div className='my_modal'>
                <button className="btn my_btn" onClick={(e) => { dispatch(Action.ADMIN_HIDE_MODAL_ADD_PHIEN_BAN) }}>Close</button>
                <div className="content_modal">
                    <div className="form">
                        <div className='bg_f1'>Thông tin phiên bản:</div>
                        <div className='label_input'>
                            <label>Link ảnh review:</label>
                            <input type="text" value={data.imgReview} onChange={(e) => { handleChangeInputAll(e, "imgReview") }} placeholder="Link ảnh..."></input>
                        </div>
                        <div className='label_input'>
                            <label>Trả góp:</label>
                            <input id='coTraGopCo' type='radio' defaultChecked={data.coTraGop == 'true'} value="true" name="coTraGop" onChange={(e) => { handleChangeInputAll(e, "coTraGop") }} />
                            <label className="label_flash label_radio" htmlFor="coTraGopCo">Có</label>
                            <input id='coTraGopKhong' type='radio' defaultChecked={data.coTraGop == 'false'} value="false" name="coTraGop" onChange={(e) => { handleChangeInputAll(e, "coTraGop") }} />
                            <label className="label_flash label_radio" htmlFor="coTraGopKhong">Không</label>
                        </div>
                        <div className='label_input'>
                            <label>Giá:</label>
                            <input type="number" value={data.cost} onChange={(e) => { handleChangeInputAll(e, "cost") }} placeholder="Giá..."></input>
                        </div>
                        <div className='label_input'>
                            <label>Giảm giá:</label>
                            <input id='coGiamGiaCo' type='radio' defaultChecked={data.coGiamGia == 'true'} value="true" name="coGiamGia" onChange={(e) => { handleChangeInputAll(e, "coGiamGia") }} />
                            <label className="label_flash label_radio" htmlFor="coGiamGiaCo">Có</label>
                            <input id='coGiamGiaKhong' type='radio' defaultChecked={data.coGiamGia == 'false'} value="false" name="coGiamGia" onChange={(e) => { handleChangeInputAll(e, "coGiamGia") }} />
                            <label className="label_flash label_radio" htmlFor="coGiamGiaKhong">Không</label>
                        </div>

                        <div className='label_input'>
                            <label>Phần trăm giảm giá:</label>
                            <input type="number" value={data.discount} onChange={(e) => { handleChangeInputAll(e, "discount") }} placeholder="phân trăm giảm giá..."></input>
                        </div>

                        <div className='label_input'>
                            <label>Ram:</label>
                            <input type="number" value={data.Ram} onChange={(e) => { handleChangeInputAll(e, "Ram") }} placeholder="Ram..."></input>
                        </div>
                        <div className='label_input'>
                            <label>Rom:</label>
                            <input type="number" value={data.Rom} onChange={(e) => { handleChangeInputAll(e, "Rom") }} placeholder="Rom..."></input>
                        </div>
                        <div className='label_input'>
                            <label>Dung lượng còn lại (khả dụng):</label>
                            <input type="number" value={data.RomConLai} onChange={(e) => { handleChangeInputAll(e, "RomConLai") }} placeholder="Dung lượng khả dụng..."></input>
                        </div>
                        <div className='label_input'>
                            <label>Thời hạn bảo hành:</label>
                            <input type="number" value={data.baoHanh} onChange={(e) => { handleChangeInputAll(e, "baoHanh") }} placeholder="Dung lượng khả dụng..."></input>
                        </div>

                        <div className='label_input'>
                            <label>Có tiền giảm thêm:</label>
                            <input id='coGiamThem' type='radio' defaultChecked={data.coGiamThem == 'true'} value="true" name="coGiamThem" onChange={(e) => { handleChangeInputAll(e, "coGiamThem") }} />
                            <label className="label_flash label_radio" htmlFor="coGiamThem">Có</label>
                            <input id='coGiamThemfalse' type='radio' defaultChecked={data.coGiamThem == 'false'} value="false" name="coGiamThem" onChange={(e) => { handleChangeInputAll(e, "coGiamThem") }} />
                            <label className="label_flash label_radio" htmlFor="coGiamThemfalse">Không</label>
                        </div>
                        <div className='label_input'>
                            <label>Tiền giảm thêm:</label>
                            <input type="number" value={data.tienGiamThem} onChange={(e) => { handleChangeInputAll(e, "tienGiamThem") }} placeholder="Dung lượng khả dụng..."></input>
                        </div>

                        <div className='label_input'>
                            <label>Có giá mới:</label>
                            <input id='coGiaMoiSieuHot' type='radio' defaultChecked={data.coGiaMoiSieuHot == 'true'} value="true" name="coGiaMoiSieuHot" onChange={(e) => { handleChangeInputAll(e, "coGiaMoiSieuHot") }} />
                            <label className="label_flash label_radio" htmlFor="coGiaMoiSieuHot">Có</label>
                            <input id='coGiaMoiSieuHotfalse' type='radio' defaultChecked={data.coGiaMoiSieuHot == 'false'} value="false" name="coGiaMoiSieuHot" onChange={(e) => { handleChangeInputAll(e, "coGiaMoiSieuHot") }} />
                            <label className="label_flash label_radio" htmlFor="coGiaMoiSieuHotfalse">Không</label>
                        </div>
                        <div className='label_input'>
                            <label>Giá mới siêu hot:</label>
                            <input type="number" value={data.giaMoi} onChange={(e) => { handleChangeInputAll(e, "giaMoi") }} placeholder="Dung lượng khả dụng..."></input>
                        </div>

                        <div >
                            <button className='btn btn-primary' onClick={handleSaveData}>Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListSanPham;