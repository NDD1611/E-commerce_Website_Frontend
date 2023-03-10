
import "./BrandFilter.scss"
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import FooterFilter from './FooterFilter'
import actionTypes from "../../../redux/actions"
function BrandFilter() {

    let dispatch = useDispatch()
    let filters = useSelector(state => {
        return state.filters
    })

    useEffect(() => {
    }, [filters])
    let addBrandFilterStore = (brand) => {
        let newListBrands = filters.listBrandFilter.map((obj) => {
            if (brand.maNsx === obj.maNsx) {
                return {
                    ...brand,
                    select: !brand.select
                }
            } else {
                return obj
            }
        })
        dispatch({
            type: actionTypes.UPDATE_LIST_BRAND_FILTER,
            payload: newListBrands
        })
    }
    return (
        <div>
            <div className="brand-content">
                <div className="content_filter">
                    {
                        filters.listBrandFilter.map((brand, index) => {
                            return (
                                <div key={index} className={brand.select ? "brand_img border-blue" : 'brand_img'} onClick={() => { addBrandFilterStore(brand) }}>
                                    <img src={brand.linkImg} />
                                </div>
                            )
                        })
                    }
                </div>
                {filters.showXemKetQuaBPRR ?
                    <FooterFilter />
                    : ''
                }
            </div>
        </div>
    )
}

export default BrandFilter;