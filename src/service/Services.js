
import axios from '../axios.js'

let getAllImageFromServer = async () => {
    try {
        let data = await axios.get('/getAllImage')
        return data
    } catch (err) {
        console.log(err)
    }
}

export default {
    getAllImageFromServer: getAllImageFromServer
}