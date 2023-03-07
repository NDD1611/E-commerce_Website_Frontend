
import axios from '../axios.js'

let getAllImageFromServer = async () => {
    try {
        let data = await axios.get('/getAllImage')
        return data
    } catch (err) {
        console.log(err)
    }
}

let getAllLoaiSp = async () => {
    try {
        let result = await axios.get('/get_all_loai_sp')
        return result
    } catch (err) {
        console.log(err)
    }
}

let addNSX = async (data) => {
    try {
        console.log(data)
        let result = await axios.post('/admin/addnsx', data)
        return result
    } catch (err) {
        console.log(err)
    }
}

let getAllNsxDTDD = async () => {
    try {
        let result = await axios.get('/get_all_nsx_dtdd')
        return result
    } catch (err) {
        console.log(err)
    }
}

let getAllSanPham = async () => {
    try {
        let result = await axios.get('/get_all_masp_dtdd')
        return result
    } catch (err) {
        console.log(err)
    }
}

let addNewSanPham = async (data) => {
    try {
        let result = await axios.post('/admin/addnewsanpham', data)
        return result
    } catch (err) {
        console.log(err)
    }
}

let addNewPhienBan = async (data) => {
    try {
        let result = await axios.post('/admin/addnewphienban', data)
        return result
    } catch (err) {
        console.log(err)
    }
}

let getPhienBanEqualMaSp = async (maSp) => {
    try {
        let result = await axios.post('/get_all_phien_ban_bang_ma_san_pham', { maSp })
        return result
    } catch (err) {
        console.log(err)
    }
}
let getPhienBanDayDu = async () => {
    try {
        let result = await axios.get('/get_all_phien_ban_day_du')
        return result
    } catch (err) {
        console.log(err)
    }
}

export default {
    getAllImageFromServer,
    addNSX,
    getAllLoaiSp,
    getAllNsxDTDD,
    getAllSanPham,
    addNewSanPham,
    addNewPhienBan,
    getPhienBanEqualMaSp,
    getPhienBanDayDu
}