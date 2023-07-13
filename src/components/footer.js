import React from 'react';
import '../ComponentsCSS/footer.css'
import { HashLink as Link } from "react-router-hash-link";
const Footer = () => {
    return (
        <div className=" my-5">

            <footer
                className="text-center text-lg-start text-dark"
                style={{ backgroundColor: "#ECEFF1" }} >

                <section
                    className="d-flex justify-content-between p-4 text-white"
                    style={{ backgroundColor: "#338a08" }} >

                    <div className="me-5">
                        <span className='phrase'>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="text-dark me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-dark me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-dark me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-dark me-4">
                            <i className="fab fa-instagram"></i>
                        </a>

                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">BOVICOR EXPORT</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto" width={"100px"}
                                    style={{ backgroundColor: "#7c4dff" }} height={"2px"}
                                />
                                <p className='paragraphFooter' style={{ textAlign: 'justify' }}>
                                    Est entreprise spécialée dans l'exportation des annimaux de l'Espagne au pays Arabe.
                                </p>
                            </div>

                            <div className="col-md-5 col-lg-4 col-xl-3 mx-auto mb-4" style={{ paddingLeft: "60px" }}>

                                <h6 className="text-uppercase fw-bold">Navigation</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ backgroundColor: "#7c4dff" }} width={"90px"} height={"2px"} />
                                <Link to='/acceuil' className='nav-link'>
                                    <p className='paragraphFooter links' >
                                        Acceuil
                                    </p>
                                </Link>
                                <Link to="/races" className='nav-link'>
                                    <p className='paragraphFooter links'>
                                        Nos Races
                                    </p>
                                </Link>
                                <Link to="/galerie" className='nav-link'>
                                    <p className='paragraphFooter links' >
                                        Galerie
                                    </p>
                                </Link>

                                <Link to="/contact" className='nav-link'>
                                    <p className='paragraphFooter links' >
                                        Contact
                                    </p>
                                </Link>

                            </div>

                            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto" width={"60px"} height={" 2px"}
                                    style={{ backgroundColor: " #7c4dff" }}
                                />
                                <p className='paragraphFooter'><i className="fas fa-home mr-3"></i>BOVICOREXPORT, S.L. CIF: B08140660T
                                    C. del Platino, 82, 28770 Colmenar Viejo, Madrid</p>
                                <p className='paragraphFooter'><i className="fas fa-envelope mr-3"></i> Contact@bovicorexport.com</p>
                                <p className='paragraphFooter'><i className="fas fa-phone mr-3"></i> +212 695255905</p>
                                <p className='paragraphFooter'><i className="fas fa-print mr-3"></i> 910422613</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="text-center p-3 text-white" style={{ backgroundColor: "#1F122e" }} >
                    © 2023 :
                    <a className="text-white " href="https://mdbootstrap.com/">Contact@bovicorexport.com</a>
                </div>

            </footer>
        </div>

    );
};
export default Footer;