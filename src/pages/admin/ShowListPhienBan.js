
import { useEffect, useState } from "react";
import Services from "../../services/Services";
import './ShowListPhienBan.scss'

function ShowListPhienBan(props) {

    let [listPB, setListPB] = useState([])


    let getListPB = async () => {
        let res = await Services.getPhienBanEqualMaSp(props.maSp)
        setListPB(res.data)
    }

    useEffect(() => {
        getListPB()
    }, [])

    return (
        <div id='ListPhienBan'>{
            listPB.map((phienBan, index) => {
                console.log(phienBan)
                return (
                    <li key={index} className="phien_ban">
                        {phienBan.Ram}GB - {phienBan.Rom}GB
                    </li>
                )
            })
        }
        </div>
    )
}

export default ShowListPhienBan;