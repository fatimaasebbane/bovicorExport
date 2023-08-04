import React from 'react';
import '../ComponentsCSS/home.css';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import OvinsEspagnol4 from '../images/ovins4.jpg';
import { useTranslation } from 'react-i18next';
import BovicorExport from '../images/Bovicor.jpeg';
import Logo from '../images/bovicorexport.png'
const ImageAndParagraph = () => {
    const { t } = useTranslation();
    return (
        <div className="home ">
            <div className="partie1 container">

                <div className="image-container">
                    <img className='img-fluid fade-in' width={"400px"} src={OvinsEspagnol4} alt="Image" />
                </div>
                <div className="paragraph-container slide-in">
                    <h4><span className='société'>{t('titre1')}</span><br /><span className='international'>{t('titre2')} :</span> </h4>
                    <br />
                    <br />
                    <p>{t('para1')} </p>
                </div>
            </div>


            <div className='partie2 container'>
                <div className="paragraph">
                    <h3 className="titre1 title1">{t('title1')} </h3>
                    <p className='P1'>{t('paragraph1')}</p>
                </div>
                <div className="paragraph">
                    <h3 className="titre1 title3">{t('title2')}</h3>
                    <p className='P2'>{t('paragraph2')}</p>
                </div>
                <div className="paragraph">
                    <h3 className="titre1">{t('title3')}</h3>
                    <p className='P3'>{t('paragraph3')}  </p>
                </div>
            </div>
            <div className='partie3' >
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="carouse">
                    <img src={BovicorExport} className='d-block w-100 blur-image fade-ini' alt="Image 2" />
                    <img src={Logo} className='img img-fluide fade-ini' alt="Logo" />
                </div>
                <br />
                <br />
                <br />
                <br />

            </div>
            <h1 className='nosServices text-center'>{t('service')}</h1>
            <div className='partie4'>

                <div className="paragraph2">
                    <div className="icon" style={{ color: "darkslategrey" }}>
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <h3 className="title2">{t('tit1')} </h3>
                    <p className='parag'>{t('par1')} </p>
                </div>
                <div className="paragraph2">
                    <div className="icon" style={{ color: "purple" }}>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <h3 className="title2">{t('tit2')} </h3>
                    <p className='parag'>{t('par2')}</p>
                </div>
                <div className="paragraph2">
                    <div className="icon">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <h3 className="title2">{t('tit3')} </h3>
                    <p className='parag'>{t('par3')}</p>
                </div>
                <div className="paragraph2">
                    <div className="icon" style={{ color: "steelblue" }}>
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <h3 className="title2">{t('tit4')}</h3>
                    <p className='parag'>{t('par4')}</p>
                </div>
                <div class="scroll-icon">
                    <button className='btn btn-dark' ><a href='https://wa.me/34695255905'><i class="fab fa-whatsapp fs-2" style={{ color: 'green' }}></i></a> </button>
                </div>
            </div>
            <hr />

        </div>
    );
};

export default ImageAndParagraph;