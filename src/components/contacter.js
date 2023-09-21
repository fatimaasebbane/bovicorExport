import { useTranslation } from 'react-i18next';
import halal from '../images/conatct.jpeg'
function Contacter() {
    const { t } = useTranslation();
    return (
        <div>
            <br />
            <br />
            <div className="container-fluid px-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center para" >
                        <p >{t('titreContact')} :</p>
                    </div>
                    <div className="col-xl-10">
                        <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-sm-6 d-none d-sm-block bg-image">
                                        <img src={halal} />
                                    </div>
                                    <div className="col-sm-6 p-4 formulaire">
                                        <div className="text-center">
                                            <div className="h3 fw-light " style={{ color: "#338A08" }}>{t('contacter')} </div>
                                            <p className="mb-4 text-muted"></p>
                                        </div>

                                        <div className="icon-container">
                                            <p className='iconContact'><i className="fas fa-home mr-3"></i><span className='ecrit1'>{t('address')}:</span>BOVICOREXPORT, S.L. CIF: B08140660T
                                                C. dl Platin, 82, 28770 Colmenar Viejo, Madrid</p><br />
                                            <p className='iconContact'><i className="fas fa-envelope mr-3"></i>
                                                <span className='ecrit2'>{t('email')}</span>Contact@bovicorexport.com<br />
                                                <span className='site'> {t('site')}:</span> <a href='https://bovicorexport.com' className='lien'>www.bovicorexport.com</a>
                                            </p><br />

                                            <p className='iconContact'><i className="fas fa-phone mr-3"></i><span className='ecrit3'>{t('phone')}:</span> +34 695255905</p><br />
                                            <p className='iconContact'><i className="fas fa-at mr-3"></i><span className='ecrit4'>{t('reseaux')} :</span>
                                                <div className='iconsContact'>
                                                    <a href="https://www.facebook.com/profile.php?id=100094635427321" className="text-dark me-4">
                                                        <i className="fab fa-facebook-f" style={{ color: "blue" }}></i>
                                                    </a>

                                                    <a href="https://www.youtube.com/channel/UCOR6O8-3q-kUthRqK5ugOlQ" className="text-dark me-4">
                                                        <i className="fab fa-youtube" style={{ color: "red" }}></i>
                                                    </a>
                                                    <a href="https://www.instagram.com/bovicor_export/" className="text-dark me-4">
                                                        <i className="fab fa-instagram" style={{ color: "tomato" }}></i>
                                                    </a>
                                                </div></p><br />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="embed-responsive embed-responsive-16by9 border">
                <iframe className="embed-responsive-item w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301543.5775200226!2d-5.318625646506791!3d41.50764756345457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd417e88e75ac24d%3A0xd79b7fd26d75d4e8!2sPol%C3%ADgono%20Industrial%20Sur%2C%20C.%20del%20Platino%2C%2082%2C%2028770%20Colmenar%20Viejo%2C%20Madrid%2C%20Espagne!5e0!3m2!1sfr!2sma!4v1689255367681!5m2!1sfr!2sma" width={"600"} height={"450"} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="scroll-icon">
                <button className='btn btn-dark' ><a href='https://wa.me/34695255905'><i class="fab fa-whatsapp fs-2" style={{ color: 'green' }}></i></a> </button>
            </div>
        </div>
    );

}
export default Contacter;