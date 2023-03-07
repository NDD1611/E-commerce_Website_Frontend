
import { useState, useEffect } from 'react'
import Menu from './Menu.js'
import './Nsx.scss'
import Service from '../../services/Services.js'

function Modal(props) {
    let [maNsx, setMaNsx] = useState('')
    let [tenNsx, setTenNsx] = useState('')
    let [linkImg, setLinkImg] = useState('')
    let [loaiSp, setLoaiSp] = useState([])
    let [maTb, setMaTb] = useState('DTDD')

    let getAllLoaiSp = async () => {
        let data = await Service.getAllLoaiSp()
        setLoaiSp(data)
    }

    useEffect(() => {
        getAllLoaiSp()
    }, [])

    let handleChaneMaTb = (e) => {
        setMaTb(e.target.value)
    }

    let handleSetMa = (e) => {
        setMaNsx(e.target.value)
    }
    let handleSetTen = (e) => {
        setTenNsx(e.target.value)
    }
    let handleSetLink = (e) => {
        setLinkImg(e.target.value)
    }

    let handleAddNSX = async () => {
        console.log(maNsx, tenNsx, maTb)
        let res = await Service.addNSX({ maNsx, tenNsx, maTb, linkImg })
        console.log(res)
        setMaNsx('')
        setTenNsx('')
        setLinkImg('')
    }


    return (
        <div className="my_modal">
            <div className='bg'></div>
            <div className='my_form'>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Mã Nhà Sản Xuất:</label>
                    <input value={maNsx} onChange={handleSetMa} type="text" className="form-control" id="formGroupExampleInput" placeholder="Ma NSX" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Tên Nhà Sản Xuất:</label>
                    <input value={tenNsx} onChange={handleSetTen} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ten NSX..." />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Link ảnh:</label>
                    <input value={linkImg} onChange={handleSetLink} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Link Imgage..." />
                </div>
                <div className="loaiSp">
                    <label for="cars">Loại Thiết bị Sản Xuất:</label>
                    <br />
                    <select name="cars" id="cars" value={maTb} onChange={handleChaneMaTb}>
                        {
                            loaiSp.map((loai) => {
                                return (
                                    <option value={loai.maTb}>{loai.tenTb}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="my_btn">

                    <button onClick={props.handleCloseModal}>Close</button>
                    <button onClick={handleAddNSX} className='right_btn' >Save</button>
                </div>
            </div>
        </div>
    )
}

function Nsx() {

    let handleShowModal = () => {
        console.log("show Modal")
        setShowModal(true)
    }

    let getAllNsxDTDD = async () => {
        let data = await Service.getAllNsxDTDD()
        setListNsxDTDD(data)
    }

    let handleCloseModal = () => {
        console.log("close Modal")
        setShowModal(false)
    }

    let [showModal, setShowModal] = useState(false)
    let [listNsxDTDD, setListNsxDTDD] = useState([])

    useEffect(() => {
        getAllNsxDTDD()
    }, [])


    return (
        <div id="NSX">
            <div>
                <Menu />
            </div>
            <div className='right'>
                <div >
                    <button className='btn btn_add' onClick={handleShowModal}>
                        Thêm nhà sản xuất
                    </button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th className="text-center">MA NSX</th>
                            <th className="text-center">Ten NSX</th>
                            <th className="text-center">Loai Thiet Bi</th>
                            <th className="text-center">Link Anh</th>
                            <th className="text-center">Img</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            listNsxDTDD.map((nsx, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{nsx.maNsx}</td>
                                        <td>{nsx.tenNsx}</td>
                                        <td>{nsx.maTb}</td>
                                        <td>{nsx.linkImg}</td>
                                        <td className="brand_image">
                                            <img src={nsx.linkImg} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>



            {showModal ? <Modal handleCloseModal={handleCloseModal} /> : null}
        </div>
    );
}

export default Nsx;

