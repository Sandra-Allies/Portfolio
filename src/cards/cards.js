import './cards.scss';
import Feneco from '../assets/images/Feneco.jpg';

function Card() {
    // const feneco = Feneco;
    return (
        <div className="Card">
            <div className="Card-picture">
            <img src={Feneco} />
            </div>

            <div className="Card-content">
                <h3>Titre de la card</h3>
                <p>Texte de la card</p>
            </div>
        </div>
    );
}

export default Card;
