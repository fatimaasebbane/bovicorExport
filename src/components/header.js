import '../ComponentsCSS/header.css';
import Bovicorexport from '../images/bovicorexport.png'
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const { t } = useTranslation();
    return (
        <header className="mb-4 fixed-top">
            <div className="p-3 text-center bg-light border-bottom">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center justify-content-md-center align-items-center">
                            <div>
                                <button className="flag-icon flag-icon-fr" onClick={() => changeLanguage('fr')}></button>
                                <button className="flag-icon flag-icon-us" onClick={() => changeLanguage('en')}></button>
                                <button className="flag-icon flag-icon-es" onClick={() => changeLanguage('es')}></button>
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
                            <Link to='/' className='nav-link'>
                                <li className="acceuil" id="acc">
                                    {t('titr1')}
                                </li>
                            </Link>
                            <Link to="/races" className='nav-link'>
                                <li className="races" id="race">
                                    {t('titr2')}
                                </li>
                            </Link>
                            <Link to="/galerie" className='nav-link'>
                                <li className="galerie" id="gal">
                                    {t('titr3')}
                                </li>
                            </Link>

                            <Link to="/contact" className='nav-link'>
                                <li className="contact" id="cont">
                                    {t('titr4')}
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