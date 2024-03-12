import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Slider.css'
import tovar1 from "/img/tovar1.png";
import tovar2 from "/img/tovar2.png";
import tovar3 from "/img/tovar3.png";
 export default function SliderC(){
    const setting = {
        dots:true,
        Infinity:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    }

    return(
        <div className="slider">
        <h1>Наши новинки</h1>
        <div className="slider_place">
            <Slider {...setting}>
                <div className="slide">
                    <img src={tovar1} alt="" />
                </div>
                <div className="slide">
                    <img src={tovar2} alt="" />
                </div>
                <div className="slide">
                    <img src={tovar3} alt="" />
                </div>
            </Slider>
        </div>
        </div>
    )
 }