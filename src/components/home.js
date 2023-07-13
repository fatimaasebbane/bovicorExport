import React from 'react';
import '../ComponentsCSS/home.css';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import OvinsEspagnol4 from '../images/ovins4.jpg';

const ImageAndParagraph = () => {
    return (
        <div className="home ">
            <div className="partie1 container">
                <div className="image-container">
                    <img className='img-fluid fade-in' width={"400px"} src={OvinsEspagnol4} alt="Image" />
                </div>
                <div className="paragraph-container slide-in">
                    <h4><span className='société'>NÉGOCE DE BÉTAIL</span><br /><span className='international'>À L’INTERNATIONAL :</span> </h4>
                    <br />
                    <br />
                    <p>Le groupe BOVICOR EXPORT est le leader espagnol de l’export de bétail hors Union Européenne. Il fournit en particulier le marché du Maghreb et du Moyen-Orient.
                        Exportation de bétail depuis l’Europe et l’Amérique du Sud, les animaux, destinés à l’élevage, l’engraissement ou l’abattage, sont ainsi exportés vers la Turquie, Liban, Algérie, Tunisie, Maroc et Libye
                        Prise en charge de A à Z.
                        Nous prenons en charge les animaux à partir de leur point de chargement dans les centres d’allotements jusqu’à leur destination finale dans le pays importateur.
                    </p>
                </div>
            </div>
            <div className='back-image'>
                m
            </div>
            <div className='partie2 container'>
                <div className="paragraph">
                    <h3 className="titre1 title1">Négoce Bétail</h3>
                    <p className='P1'>Le groupe bovicor export est le leader espagnol du marché de l’export d’animaux vivants hors Union Européenne.
                    </p>
                </div>
                <div className="paragraph">
                    <h3 className="titre1 title3">Transport routier</h3>
                    <p className='P2'>Les bêtes sont acheminées avec le plus grand soin par des camions bétaillière au port de chargement ou directement à destination.
                    </p>
                </div>
                <div className="paragraph">
                    <h3 className="titre1">Transport maritime</h3>
                    <p className='P3'>Toute la logistique est organisée pour que le chargement des navires se fasse rapidement. A bord, des équipages spécialement formés s’occupent avec attention du bien être des animaux jusqu’à leur arrivée à destination.
                    </p>
                </div>
            </div>
            <div className='partie3' >
                <video></video>
            </div>
            <h1 className='nosServices text-center'>Nos services!</h1>
            <div className='partie4'>

                <div className="paragraph2">
                    <div className="icon" style={{ color: "darkslategrey" }}>
                        <FontAwesomeIcon icon={faCar} />
                    </div>
                    <h3 className="title2">Transport sécurisé</h3>
                    <p className='parag'>Meilleur moyen de transport et une sécurité assurée
                    </p>
                </div>
                <div className="paragraph2">
                    <div className="icon" style={{ color: "purple" }}>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <h3 className="title2">Service client</h3>
                    <p className='parag'>Très réactif et disponible à tout moment</p>
                </div>
                <div className="paragraph2">
                    <div className="icon">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <h3 className="title2">Professionnel</h3>
                    <p className='parag'>Equipe de professionnels hautement  qualifiés</p>
                </div>
                <div className="paragraph2">
                    <div className="icon" style={{ color: "steelblue" }}>
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <h3 className="title2">Délai de transport</h3>
                    <p className='parag'>Délai de transport à temps et bien respecté</p>
                </div>
            </div>
            <hr />

        </div>
    );
};

export default ImageAndParagraph;