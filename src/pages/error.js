import '../ComponentsCSS/error.css';
import { HashLink as Link } from "react-router-hash-link";
function error() {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2 className='page404'>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to='/acceuil' className='link'>
                    <p className='button'>Go To Homepage</p>
                </Link>
            </div>
        </div>
    );
}
export default error;