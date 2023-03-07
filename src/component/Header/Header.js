
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    let logo = process.env.REACT_APP_BACKEND_URL + '/public/image/logo_tgdd.png'
    let listDataBottom = [
        {
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/icon-phone-96x96-2.webp',
            span: 'Điện thoại',
            url: '/dtdd'
        }, {
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/icon-laptop-96x96-1.webp',
            span: 'Laptop',
            url: '/laptop'
        }, {
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/icon-tablet-96x96-1.webp',
            span: 'Tablet',
            url: '#'
        }, {
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/icon-phu-kien-96x96-1.webp',
            span: 'Phụ kiện',
            url: '#'
        }, {
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/icon-smartwatch-96x96-1.webp',
            span: 'Smartwatch',
            url: '#'
        }, {
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/watch-icon-96x96.webp',
            span: 'Đồng hồ',
            url: '#'
        }, {
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/icon-header-may-cu-30x30.webp',
            span: 'Máy cũ giá rẻ',
            url: '#'
        }, {
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/icon-pc-96x96.webp',
            span: 'PC, Máy in',
            url: '#'
        }, {
            src: '',
            span: 'Sim, Thẻ cào',
            url: '#'
        }, {
            src: '',
            span: 'Dịch vụ tiện ích',
            url: '#'
        },
    ]


    return (
        <>
            <div id='Header'>
                <div className="top">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="search">
                        <input placeholder='Bạn tìm gì...' />
                        <div className="search_icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="history_cart">Lịch sử đơn <br /> hàng</div>
                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Giỏ hàng</p>
                    </div>
                    <div className="news">24h <br />Công nghệ</div>
                    <div className="bordercol"></div>
                    <div className="question">
                        Hỏi Đáp
                    </div>
                    <div className="bordercol"></div>
                    <div className="game_app">
                        Game App
                    </div>
                </div>
                <div className="bottom">
                    <ul>
                        {
                            listDataBottom.map((item, index) => {
                                return (
                                    <li className='' key={index}>
                                        <Link to={item.url}>
                                            <div>
                                                <img src={item.src} />
                                            </div>
                                            <span>
                                                {item.span}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;