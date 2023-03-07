
import "./Footer.scss"

function Footer() {
    return (
        <div id='Footer'>
            <ul>
                <li>Tích điểm Quà tặng VIP</li>
                <li>Lịch sử mua hàng</li>
                <li>Tìm hiểu về mua trả góp</li>
                <li>Chính sách bảo hành</li>
                <li>Xem thêm
                    <i className="fa-solid fa-caret-down"></i>
                </li>
                <li></li>
            </ul>
            <ul>
                <li>Giới thiệu công ty (MWG.vn)</li>
                <li>Tuyển dụng</li>
                <li>Gửi góp ý, khiếu nại</li>
                <li>Tìm siêu thị (3.384 shop)</li>
                <li>Xem bản mobile</li>
            </ul>
            <ul>
                <li>
                    <span>
                        Tổng đài hỗ trợ
                    </span>  (Miễn phí gọi)
                </li>
                <li>Gọi mua: <a href="tel:18001060">
                    1800.1060
                </a> (7:30 - 22:00)
                </li>
                <li>Kỹ thuật: <a href="tel:18001763">
                    1800.1763
                </a> (7:30 - 22:00)
                </li>
                <li>Khiếu nại: <a href="tel:18001062">
                    1800.1062
                </a> (8:00 - 21:30)
                </li>
                <li>Bảo hành: <a href="tel:18001064">
                    1800.1064
                </a> (8:00 - 21:00)
                </li>
            </ul>
            <ul>
                <img src='http://localhost:8080/public/image/logo_footer.png' />
            </ul>
        </div>
    );
}

export default Footer;