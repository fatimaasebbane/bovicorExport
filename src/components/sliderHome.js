
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../ComponentsCSS/home.css';
import BovinsESPAGNOL1 from '../images/bovins1.jpg';
import Ovins1 from '../images/ovins1.jpg';
import Ovins2 from '../images/ovins2.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
const SliderComponent = () => {
    return (

        <div className="slider-container">
            <Slider
                dots={true}
                infinite={true}
                autoplay={true}
                autoplaySpeed={2000}
                pauseOnHover={true}
                className='fade-slider' >

                <div className='fade-slide'>
                    <img className='slider-image' src={BovinsESPAGNOL1} alt="Image 1" />
                    <div className="slider-title-container">
                        <div className="slider-title"><span className='bienvenue'>BIENVENUE DANS</span><br /> <br /><span className='bovicor'> BOVICOR EXPORT</span></div>
                    </div>
                </div>
                <div className='fade-slide'>
                    <img className='slider-image' src={Ovins1} alt="Image 2" />
                    <div className="slider-title-container">
                        <div className="slider-title"> <span className='bienvenue'>BIENVENUE DANS</span><br /> <br /><span className='bovicor'> BOVICOR EXPORT</span></div>
                    </div>
                </div>
                <div className='fade-slide'>
                    <img className='slider-image' src={Ovins2} alt="Image 3" />
                    <div className="slider-title-container">
                        <div className="slider-title"><span className='bienvenue'>BIENVENUE DANS</span><br /> <br /><span className='bovicor'> BOVICOR EXPORT</span></div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;