import '../ComponentsCSS/error.css';
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from 'react-i18next';
function Error() {
    const { t } = useTranslation();
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2 className='page404'>404 - {t('page')} </h2>
                <p>{t('paraError')} </p>
                <Link to='/acceuil' className='link'>
                    <p className='button'>{t('go')} </p>
                </Link>
            </div>
        </div>
    );
}
export default Error;