import Header from "../components/header";
import Footer from "../components/footer";
import SliderComponent from "../components/sliderHome";
import { useTranslation } from 'react-i18next';
import "../ComponentsCSS/nosRaces.css";
import Ovins5 from '../images/ovins5.jpg';
import BovinsEspagnol from '../images/bovins16.jpg'
import BovinsEspagnol1 from '../images/bovins17.jpg'
import BovinsEspagnol2 from '../images/bovins18.jpg'
import OvinsEspagnol from '../images/ovine7.bmp'
import OvinsEspagnol1 from '../images/ovins8.jpg'

function Races() {
    const { t } = useTranslation();
    return (
        <div className="Race">
            <Header />
            <br />
            <br />
            <br />
            <div class="scroll-icon">
                <button className='btn btn-dark' ><a href='https://wa.me/34695255905'><i class="fab fa-whatsapp fs-2" style={{ color: 'green' }}></i></a> </button>
            </div>
            <SliderComponent />
            <h2 className="text-center nosRaces">{t('titreRaces')}:</h2>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className="card-1">
                            <a className="img-card-1">
                                <img src={Ovins5} alt="Race mérinos" />
                            </a>
                            <div className="card-1-content">
                                <h4 className="card-1-title">
                                    Race mérinos
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card-1">
                            <a className="img-card-1">
                                <img src={BovinsEspagnol} alt="race navarraise" />
                            </a>
                            <div className="card-1-content">
                                <h4 className="card-1-title">
                                    race navarraise
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card-1">
                            <a className="img-card-1">
                                <img src={BovinsEspagnol1} alt="Race ojinegra de teruel" />
                            </a>
                            <div className="card-1-content">
                                <h4 className="card-1-title">
                                    Race ojinegra de teruel
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className="card-1">
                            <a className="img-card-1">
                                <img src={BovinsEspagnol2} alt="Race ovine castellène" />
                            </a>
                            <div className="card-1-content">
                                <h4 className="card-1-title">
                                    Race ovine castellène
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card-1">
                            <a className="img-card-1">
                                <img src={OvinsEspagnol} alt="Race ovine manchegan" />
                            </a>
                            <div className="card-1-content">
                                <h4 className="card-1-title">
                                    Race ovine manchegan
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card-1">
                            <a className="img-card-1">
                                <img src={OvinsEspagnol1} alt="race rasa aragonesa" />
                            </a>
                            <div className="card-1-content">
                                <h4 className="card-1-title">
                                    race rasa aragonesa
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Races;