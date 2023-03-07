
import "./BrandFilter.scss"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addBrandFilter, addBrandFilterBorder } from "../../../redux/actionCreator"
function BrandFilter(props) {

    let dispatch = useDispatch()

    let listIndexBorders = useSelector((state) => {
        return state.filters.listIndexBrandBorder
    })

    useEffect(() => {
        setListIndexBorder(listIndexBorders)
    }, [listIndexBorders])

    let checkBorderBlue = (index) => {
        let check = false
        for (let idx of listIndexBorder) {
            if (index === idx) {
                check = true
            }
        }
        return check
    }

    let handleClick = (indexBD) => {
        let copyListIndex = [...listIndexBorder]
        let check = false
        copyListIndex = copyListIndex.filter((index) => {
            if (indexBD === index) {
                check = true
            }
            return indexBD !== index
        })
        if (check === false) {
            copyListIndex.push(indexBD)
        }
        let listBrandFilter = props.listBrands.filter((brand, index) => {
            return copyListIndex.includes(index)
        })
        dispatch(addBrandFilter(listBrandFilter))
        dispatch(addBrandFilterBorder(copyListIndex))
        setListIndexBorder(copyListIndex)
    }

    let [listIndexBorder, setListIndexBorder] = useState([])

    return (
        <div>
            <div className="brand-content">
                {
                    props.listBrands.map((brand, index) => {
                        return (
                            <div key={index} className={checkBorderBlue(index) ? "brand_img border-blue" : "brand_img"} onClick={() => { handleClick(index) }}>
                                <img src={brand.linkImg} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BrandFilter;