import Header from "../components/header";
import Slider from "../components/sliderHome";
import React from "react";
import ImageAndParagraph from "../components/home";
import Footer from "../components/footer";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
function acceuil() {

    return (
        <I18nextProvider i18n={i18n}>
            <div className="home">
                <Header />
                <br />
                <br />
                <br />


                <Slider />
                <ImageAndParagraph />
                <Footer />
            </div>
        </I18nextProvider>
    );
}
export default acceuil;