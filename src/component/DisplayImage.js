import { useState, useEffect } from 'react'
import Service from '../services/Services.js'
import './DisplayImage.scss'

let DisplayImage = () => {

    let [listImgs, setListImgs] = useState([])
    let [dataImages, setDataImage] = useState([])
    let [valueInput, setValueInput] = useState('')

    let getImage = async () => {
        let data = await Service.getAllImageFromServer()
        let lists = data.map((img) => {
            return process.env.REACT_APP_BACKEND_URL + img;
        })
        setListImgs(lists)
        setDataImage(lists)
    }
    useEffect(() => {
        getImage()
    }, [])

    let handleInput = (e) => {
        let value = e.target.value
        let newLists = dataImages.filter((img) => {
            return img.includes(value)
        })
        console.log(newLists)
        setValueInput(value)
        setListImgs(newLists)
    }



    return (
        <>
            <div className="search">
                <input value={valueInput} placeholder='search...' onChange={handleInput}></input>
            </div>
            <div id='display_image'>
                {
                    listImgs.map((srcImg) => {
                        return (
                            <div key={srcImg} className='container'>
                                <div className='image'>
                                    <img src={srcImg} />
                                </div>
                                <div className="divsrc">{srcImg}</div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default DisplayImage;