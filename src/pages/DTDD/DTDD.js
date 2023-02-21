
import Header from "../../component/Header/Header.js"
import Footer from '../../component/Footer/Footer.js'
import './DTDD.scss'
import './carousel.js'
import CarouselC from "./carousel.js";

function Home() {
    return (
        <div>
            <Header />
            <div id="Home">
                <div className='carousel-top'>
                    <div className="left">
                        <CarouselC />
                    </div>
                    <div className="right">
                        <div>
                            <img src="http://localhost:8080/public/image/carousel_right_sticky-a57-copy-390x97.png" />
                        </div>
                        <div>
                            <img src="http://localhost:8080/public/image/carousel_right_sticky-mseri3-copy7-390x97.png" />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Home;