
import Menu from './Menu.js'
import './SanPham.scss'
import FormAddSp from './FormAddSp.js'
import FormAddPhienBan from './FormAddPhienBan.js'
import Services from '../../services/Services.js'
import ShowListPhienBan from './ShowListPhienBan.js'

import Action from '../../redux/actions'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


function SanPham() {

    let [showForm, setShowForm] = useState(false)
    let [listSp, setListSp] = useState([])
    let [ShowList, setShowList] = useState(false)
    let [maSp, setMaSp] = useState('')

    let showModal = useSelector((state) => state.admins.showModalAddPhienBan)

    let dispatch = useDispatch()

    let handleCloseForm = () => {
        setShowForm(false)
    }
    let getAllSanPham = async () => {
        let result = await Services.getAllSanPham()
        result = result.map((data) => {
            return {
                ...data,
                listQp: JSON.parse(data.listQp),
                listTinhNangCameraSau: JSON.parse(data.listTinhNangCameraSau),
                listOptWifi: JSON.parse(data.listOptWifi),
                listOptGPS: JSON.parse(data.listOptGPS),
                listOptCongNghePin: JSON.parse(data.listOptCongNghePin),
                listOptNgheNhac: JSON.parse(data.listOptNgheNhac),
                listOptXemPhim: JSON.parse(data.listOptXemPhim),
                listOptTNDacBiet: JSON.parse(data.listOptTNDacBiet),
                listTinhNangCameraTruoc: JSON.parse(data.listTinhNangCameraTruoc)
            }
        })
        setListSp(result)
    }

    let addNewPhienBan = (sp) => {
        console.log(sp)
        setMaSp(sp.maSp)
        dispatch(Action.ADMIN_SHOW_MODAL_ADD_PHIEN_BAN)
    }



    useEffect(() => {
        getAllSanPham()
    }, [])

    return (
        <div id='SANPHAM'>
            <div>
                <Menu />
            </div>
            <div className="right">
                <div className="top">
                    <button className='btn btn-primary' onClick={() => setShowForm(true)}>Thêm mới sản phẩm</button>
                </div>
                <button className='btn btn-primary' onClick={() => { setShowList(true) }}>show</button>
                <button className='btn btn-primary' onClick={() => { setShowList(false) }}>hide</button>
                <div>Danh sách sản phẩm:</div>
                {
                    listSp.map((sp, index) => {
                        return (
                            <div key={index}>
                                <div className='san_pham'>{sp.maSp} - {sp.tenSp}
                                    <button onClick={() => { addNewPhienBan(sp) }}>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>

                                <ul>
                                    {ShowList ? <ShowListPhienBan maSp={sp.maSp} /> : ''}
                                </ul>
                            </div>
                        )
                    })
                }


                {showModal ? <FormAddPhienBan maSp={maSp} /> : ''}
            </div>
            {showForm ? <FormAddSp handleCloseForm={handleCloseForm} /> : ''}

        </div>
    )
}

export default SanPham;