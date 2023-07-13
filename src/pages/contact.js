import '../ComponentsCSS/contact.css'
import Header from "../components/header";
import Footer from "../components/footer";
import Contacter from '../components/contacter';
import SliderComponent from '../components/sliderHome';
function contact() {
    return (
        <div className="contacter">
            <Header />
            <br />
            <br />
            <SliderComponent />
            <Contacter />
            <Footer />
        </div>
    );
}
export default contact;