import './cards.scss';
import logo from '../assets/images/logo.jpg'

function Card() {
    return (
        <div className="Card">
            <div className="Card-picture">
            <img src={logo} />
            </div>

            <div className="Card-content">
                <h3>Titre de la card</h3>
                <p>Texte de la card</p>
            </div>
        </div>
    );
}

export default Card;
