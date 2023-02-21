
// import './carousel.scss'

// function Carousel() {

//     let listCarousels = [
//         {
//             class: 'carousel-item active',
//             src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_800-200-800x200-103.webp'
//         }, {
//             class: 'carousel-item ',
//             src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_GLX-S20-Fe-800-200-800x200.png'
//         }, {
//             class: 'carousel-item ',
//             src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_reno8z-800-200-800x200.png'
//         }, {
//             class: 'carousel-item ',
//             src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_800-200-800x200-125.png'
//         }, {
//             class: 'carousel-item ',
//             src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_POCO-C40-800-200-800x200.png'
//         }, {
//             class: 'carousel-item ',
//             src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_right_sticky-a57-copy-390x97.png'
//         }, {
//             class: 'carousel-item ',
//             src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_fbuUoK6A-800x200-1.png'
//         }, {
//             class: 'carousel-item ',
//             src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_Realme-800-200-800x200-2.png'
//         },
//     ]

//     return (
//         // <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//         //     <div className="carousel-indicators">
//         //         {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
//         //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button> */}
//         //         {
//         //             listCarousels.map((div, index) => {
//         //                 if (index == 0) {
//         //                     return (
//         //                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide"></button>
//         //                     )
//         //                 } else {
//         //                     return (
//         //                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label="Slide"></button>
//         //                     );
//         //                 }
//         //             })
//         //         }
//         //     </div>
//         //     <div className="carousel-inner">
//         //         {
//         //             listCarousels.map((div, index) => {
//         //                 return (
//         //                     <div className={div.class}>
//         //                         <img src={div.src} className="d-block w-100" alt="..." />
//         //                     </div>
//         //                 );
//         //             })
//         //         }
//         //     </div>
//         //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//         //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         //         <span className="visually-hidden">Previous</span>
//         //     </button>
//         //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//         //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         //         <span className="visually-hidden">Next</span>
//         //     </button>
//         // </div>
//     );
// }

// export default Carousel;

import Carousel from 'react-bootstrap/Carousel';
import "./carousel.scss"
function CarouselC() {

    let listCarousels = [
        {
            class: 'carousel-item active',
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_800-200-800x200-103.webp'
        }, {
            class: 'carousel-item ',
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_GLX-S20-Fe-800-200-800x200.png'
        }, {
            class: 'carousel-item ',
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_reno8z-800-200-800x200.png'
        }, {
            class: 'carousel-item ',
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_800-200-800x200-125.png'
        }, {
            class: 'carousel-item ',
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_POCO-C40-800-200-800x200.png'
        }, {
            class: 'carousel-item ',
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_right_sticky-a57-copy-390x97.png'
        }, {
            class: 'carousel-item ',
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_fbuUoK6A-800x200-1.png'
        }, {
            class: 'carousel-item ',
            src: process.env.REACT_APP_BACKEND_URL + '/public/image/carousel_Realme-800-200-800x200-2.png'
        },
    ]
    return (
        <Carousel>
            {
                listCarousels.map((slide) => {
                    return (
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={slide.src}
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

export default CarouselC;