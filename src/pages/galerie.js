import React from 'react';
import '../ComponentsCSS/galerie.css';
import OvinsEspagnol1 from "../images/ovins1.jpg";
import OvinsEspagnol2 from "../images/ovins2.jpg";
import OvinsEspagnol4 from "../images/ovins4.jpg";
import OvinsEspagnol7 from "../images/ovine7.jpg";
import OvinsEspagnol8 from "../images/ovins8.jpg";
import BovinEspagnol1 from "../images/bovins1.jpg";
import BovinEspagnol2 from "../images/bovins2.jpg";
import BovinEspagnol3 from "../images/bovins3.jpg";
import BovinEspagnol4 from "../images/bovins4.jpg";
import BovinEspagnol5 from "../images/bovins5.jpg";
import BovinEspagnol9 from "../images/bovins9.jpg";
import BovinEspagnol10 from "../images/bovins10.jpg";
import BovinEspagnol12 from "../images/bovins12.jpg";
import BovinEspagnol13 from "../images/bovins13.jpg";
import BovinEspagnol14 from "../images/bovins14.jpg";
import BovinEspagnol15 from "../images/bovins15.jpg";
import BovinEspagnol16 from "../images/bovins16.jpg";
import BovinEspagnol17 from "../images/bovins17.jpg";
import BovinEspagnol18 from "../images/bovins18.jpg";
import BovinEspagnol19 from "../images/bovins19.jpg";
import BovinEspagnol20 from "../images/bovins20.jpg";
import BovinEspagnol21 from "../images/bovins21.jpg";
import BovinEspagnol22 from "../images/bovins22.jpg";

import Header from '../components/header';
import Footer from '../components/footer';
import SliderComponent from '../components/sliderHome';

import { useTranslation } from 'react-i18next';

const Galerie = () => {
    const { t } = useTranslation();
    const images = [
        OvinsEspagnol1,
        OvinsEspagnol2,
        OvinsEspagnol4, OvinsEspagnol7,
        BovinEspagnol2, BovinEspagnol3, BovinEspagnol5, OvinsEspagnol8,
        BovinEspagnol9, BovinEspagnol10, BovinEspagnol12, BovinEspagnol14, BovinEspagnol15,
        BovinEspagnol16, BovinEspagnol17, BovinEspagnol18, BovinEspagnol19, BovinEspagnol20, BovinEspagnol21, BovinEspagnol22,
        OvinsEspagnol8, BovinEspagnol1, BovinEspagnol4, BovinEspagnol13
    ];

    return (
        <div className='galery'>
            <Header />
            <br />

            <br />
            <br />

            <SliderComponent />
            <h1 className='text-center gal'>{t('titreGalerie')}:</h1>
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div class="scroll-icon">
                <button className='btn btn-dark' ><a href='https://wa.me/34695255905'><i class="fab fa-whatsapp fs-2" style={{ color: 'green' }}></i></a> </button>
            </div>
            <Footer />
        </div>

    );
};

export default Galerie;