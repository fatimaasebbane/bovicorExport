import Header from "../components/header";
import Slider from "../components/sliderHome";
import React from "react";
import ImageAndParagraph from "../components/home";
import Footer from "../components/footer";
function acceuil() {

    return (
        <div className="home">
            <Header />
            <br />
            <br />
            <Slider />
            <ImageAndParagraph />
            <Footer />
        </div>
    );
}
export default acceuil;