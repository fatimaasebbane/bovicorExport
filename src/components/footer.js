import React from 'react';
import '../ComponentsCSS/footer.css'
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from 'react-i18next';
import Halal from '../images/Bovicorexport-halal.png'
const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="my-5">

            <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: "#ECEFF1" }}>

                <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: "#338a08" }}>

                    <div className="me-5">
                        <span className='phrase'>{t('titrefooter')} </span>
                    </div>
                    <div>
                        <a href="https://wa.me/34695255905" className="text-dark me-4">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100094635427321" className="text-dark me-4">
                            <i className="fab fa-facebook-f" ></i>
                        </a>

                        <a href="https://www.youtube.com/channel/UCOR6O8-3q-kUthRqK5ugOlQ" className="text-dark me-4">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.instagram.com/bovicor_export/" className="text-dark me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                </section>

                <section className="container mt-5">
                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">{t('titleFooter')}</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ backgroundColor: "#7c4dff" }} width={"100px"} height={"2px"} />
                            <p className='paragraphFooter' style={{ textAlign: 'justify' }}>
                                {t('parafooter')}
                            </p>
                            <br />

                            <img className='img-fluid footerImage' src={Halal} />
                        </div>

                        <div className="col-md-5 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">{t('titlefooter2')}</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ backgroundColor: "#7c4dff" }} width={"90px"} height={"2px"} />
                            <Link to='/acceuil' className='nav-link'>
                                <p className='paragraphFooter links' >
                                    {t('titr1')}
                                </p>
                            </Link>
                            <Link to="/races" className='nav-link'>
                                <p className='paragraphFooter links'>
                                    {t('titr2')}
                                </p>
                            </Link>
                            <Link to="/galerie" className='nav-link'>
                                <p className='paragraphFooter links' >
                                    {t('titr3')}
                                </p>
                            </Link>
                            <Link to="/contact" className='nav-link'>
                                <p className='paragraphFooter links' >
                                    {t('titr4')}
                                </p>
                            </Link>
                        </div>

                        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">{t('contact')}</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" width={"60px"} height={" 2px"} style={{ backgroundColor: " #7c4dff" }} />
                            <p className='paragraphFooter'><i className="fas fa-home mr-3"></i>BOVICOREXPORT, S.L. CIF: B08140660T
                                C. del Platino, 82, 28770 Colmenar Viejo, Madrid</p>
                            <p className='paragraphFooter'><i class="fas fa-map-marker"></i>

                                BOVICOREXPORT, S.A. CIF: B08140660T
                                C. Cam. los Molinos, 84, 16640 Belmonte, CUENCA. España
                            </p>
                            <p className='paragraphFooter'><i className="fas fa-envelope mr-3"></i> Contact@ bovicorexport.com</p>
                            <p className='paragraphFooter'><i className="fas fa-phone mr-3"></i> +34 695255905</p>
                            <p className='paragraphFooter'><i className="fas fa-print mr-3"></i> 910422613</p>
                        </div>

                    </div>
                </section>

                <div className="text-center p-3 text-white" style={{ backgroundColor: "#1F122e" }}>
                    © 2023 :
                    <a className="text-white  " href="https://mdbootstrap.com/">Contact@ bovicorexport.com</a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;