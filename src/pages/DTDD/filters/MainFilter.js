

import './MainFilter.scss'
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import RamFilter from './RamFilter';
import RomFilter from './RomFilter';

function MainFilter(props) {
    return (
        <div>
            <div className="main-filter-content">
                <button className='close_filter' onClick={(e) => { props.closeMainFilterFunc(e) }}>
                    <i className="fa-solid fa-xmark"></i>
                    <span>
                        Đóng
                    </span>
                </button>
                <div className='show_select_filter'></div>
                <div className='title-filter'>Hãng</div>
                <BrandFilter listBrands={props.listBrands} />
                <div className='price_ram_rom'>
                    <div className='common'>
                        <div className='title'>Giá</div>
                        <PriceFilter />
                    </div>
                    <div className='common'>
                        <div className='title'>Ram</div>
                        <RamFilter />
                    </div>
                    <div className='common'>
                        <div className='title'>Dung lượng lưu trữ</div>
                        <RomFilter />
                    </div>
                </div>
            </div>
        </div >
    )

}

export default MainFilter;