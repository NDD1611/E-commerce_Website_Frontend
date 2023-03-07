
import { Link } from 'react-router-dom';
import './Menu.scss'

function Menu() {

    return (
        <div id="Menu">
            <div>Menu</div>
            <Link to='/admin/nsx'>
                <div className='line_menu'> Nhà sản xuất                </div>
            </Link>
            <Link to="/admin/sanpham">
                <div className='line_menu'>Sản phẩm</div>
            </Link>
        </div>
    );
}

export default Menu;