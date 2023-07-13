import Header from "../components/header";
import Footer from "../components/footer";
import SliderComponent from "../components/sliderHome";
import "../ComponentsCSS/nosRaces.css";
import Ovins5 from '../images/ovins5.jpg';
import BovinsEspagnol from '../images/bovins16.jpg'
import BovinsEspagnol1 from '../images/bovins17.jpg'
import BovinsEspagnol2 from '../images/bovins18.jpg'
import OvinsEspagnol from '../images/ovine7.bmp'
import OvinsEspagnol1 from '../images/ovins8.jpg'
function Races() {
    return (
        <div className="Race">
            <Header />
            <br />
            <br />
            <SliderComponent />
            <h2 className="text-center nosRaces">Nos Races:</h2>
            <section class="wrapper">

                <div class="container-fostrap">
                    <div class="content">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card-1">
                                        <a class="img-card-1">
                                            <img src={Ovins5} />
                                        </a>
                                        <div class="card-1-content">
                                            <h4 class="card-1-title">
                                                Race mérinos
                                            </h4>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card-1">
                                        <a class="img-card-1">
                                            <img src={BovinsEspagnol} />
                                        </a>
                                        <div class="card-1-content">
                                            <h4 class="card-1-title">
                                                race navarraise
                                            </h4>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card-1">
                                        <a class="img-card-1">
                                            <img src={BovinsEspagnol1} />
                                        </a>
                                        <div class="card-1-content">
                                            <h4 class="card-1-title">
                                                Race ojinegra de teruel
                                            </h4>

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card-1">
                                        <a class="img-card-1">
                                            <img src={BovinsEspagnol2} />
                                        </a>
                                        <div class="card-1-content">
                                            <h4 class="card-1-title">
                                                Race ovine castellène
                                            </h4>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card-1">
                                        <a class="img-card-1">
                                            <img src={OvinsEspagnol} />
                                        </a>
                                        <div class="card-1-content">
                                            <h4 class="card-1-title">
                                                Race ovine manchegan
                                            </h4>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4">
                                    <div class="card-1">
                                        <a class="img-card-1">
                                            <img src={OvinsEspagnol1} />
                                        </a>
                                        <div class="card-1-content">
                                            <h4 class="card-1-title">
                                                race rasa aragonesa
                                            </h4>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
}
export default Races;