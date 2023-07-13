import React from 'react';
import '../ComponentsCSS/galerie.css';
import Ovins1 from "../images/ovins1.jpg";
import Ovins2 from "../images/ovins2.jpg";

import Ovins4 from "../images/ovins4.jpg";
import Ovins5 from "../images/ovins5.jpg";
import Ovins7 from "../images/ovine7.jpg";
import Ovins8 from "../images/ovins8.jpg";
import Bovins1 from "../images/bovins1.jpg";
import Bovins2 from "../images/bovins2.jpg";
import Bovins3 from "../images/bovins3.jpg";
import Bovins4 from "../images/bovins4.jpg";
import Bovins5 from "../images/bovins5.jpg";
import Bovins6 from "../images/bovins6.jpg";
import Bovins7 from "../images/bovins7.jpg";
import Bovins8 from "../images/bovins8.jpg";
import Bovins9 from "../images/bovins9.jpg";
import Bovins10 from "../images/bovins10.jpg";
import Bovins11 from "../images/bovins11.jpg";
import Bovins12 from "../images/bovins12.jpg";
import Bovins13 from "../images/bovins13.jpg";
import Bovins14 from "../images/bovins14.jpg";
import Bovins15 from "../images/bovins15.jpg";
import Bovins16 from "../images/bovins16.jpg";
import Bovins17 from "../images/bovins17.jpg";
import Bovins18 from "../images/bovins18.jpg";
import Bovins19 from "../images/bovins19.jpg";
import Bovins20 from "../images/bovins20.jpg";
import Bovins21 from "../images/bovins21.jpg";
import Bovins22 from "../images/bovins22.jpg";



import Header from '../components/header';
import Footer from '../components/footer';
import SliderComponent from '../components/sliderHome';


const galerie = () => {
    const images = [
        Ovins1,
        Ovins2,
        Ovins4, Ovins7,
        Bovins2, Bovins3, Bovins5, Ovins8,
        Bovins9, Bovins10, Bovins12, Bovins14, Bovins15,
        Bovins16, Bovins17, Bovins18, Bovins19, Bovins20, Bovins21, Bovins22,
        Ovins8, Bovins1, Bovins4, Bovins13, Ovins5, Bovins11


    ];

    return (
        <div className='galery'>
            <Header />
            <br />
            <br />
            <SliderComponent />
            <h1 className='text-center gal'>Galerie:</h1>
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>

    );
};

export default galerie;