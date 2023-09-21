import React from 'react';
import '../ComponentsCSS/home.css';
import BovinsESPAGNOL1 from '../images/bovin.jpg';
import Ovins2 from '../images/bovins1.jpg'
import BovicorExport from '../images/bovicorexport .jpg';
import { useTranslation } from 'react-i18next';
const SliderComponent = () => {
    const { t } = useTranslation();
    const imageWidth = '100%';
    const imageHeight = '700px';

    return (
        <div className="slider-container">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={BovinsESPAGNOL1} alt="Image 1" style={{ width: imageWidth, height: imageHeight }} />
                        <div className="carousel-caption">
                            <div className="slider-title-container">
                                <div className="slider-title text-center slider-title-background">
                                    <span className='bienvenue'>{t('titreSlider1')}</span><br />
                                    <span className='bovicor'>BOVICOR EXPORT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={BovicorExport} style={{ width: imageWidth, height: imageHeight }} alt="Image 2" />
                        <div className="carousel-caption">
                            <div className="slider-title-container">
                                <div className="slider-title text-center slider-title-background">
                                    <span className='bienvenue'>{t('titreSlider1')}</span><br />
                                    <span className='bovicor'>BOVICOR EXPORT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Ovins2} style={{ width: imageWidth, height: imageHeight }} alt="Image 3" />
                        <div className="carousel-caption">
                            <div className="slider-title-container">
                                <div className="slider-title text-center slider-title-background">
                                    <span className='bienvenue'>{t('titreSlider1')}</span><br />
                                    <span className='bovicor'>BOVICOR EXPORT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    );
};

export default SliderComponent;