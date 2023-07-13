import '../ComponentsCSS/header.css';
import Bovicorexport from '../images/bovicorexport.png'
import { HashLink as Link } from "react-router-hash-link";
const Header = () => {
    return (
        <header className="mb-4 fixed-top">
            <div className="p-3 text-center bg-light border-bottom">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center justify-content-md-center align-items-center">
                            <div>
                                <span className="flag-icon flag-icon-fr"></span>
                                <span className="flag-icon flag-icon-us"></span>
                                <span className="flag-icon flag-icon-es"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-light " >
                <div className="container">
                    <img src={Bovicorexport} alt="" className="navbar-brand logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
                        <ul className="navbar-nav" >
                            <Link to='/acceuil' className='nav-link'>
                                <li className="acceuil">
                                    Acceuil
                                </li>
                            </Link>
                            <Link to="/races" className='nav-link'>
                                <li className="races">
                                    Nos Races
                                </li>
                            </Link>
                            <Link to="/galerie" className='nav-link'>
                                <li className="galerie">
                                    Galerie
                                </li>
                            </Link>

                            <Link to="/contact" className='nav-link'>
                                <li className="contact">
                                    Contact
                                </li>
                            </Link>

                        </ul>
                    </div>

                </div>

            </nav>

        </header >

    );
}

export default Header;