import './homeCard.scss';

function HomeCardCitation() {
    return (
            <div className="HomeCard">
                <div className="HomeCard-picture">
                    <figure>
                        <p>
                            La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter,
                            mais lorsqu'il n'y a plus rien à retirer.
                        </p>
                        <figcaption>Antoine de Saint-Exupéry</figcaption>
                    </figure>
                </div>

                <div className="HomeCard-content">
                    <h3>Ma citation du moment</h3>
                    <p>Quel citation vous parle le plus / vous correspond ?</p>
                    <p>J'ai découvert cette citation en me promenant sur internet, elle m'a tout de suite plu</p>
                </div>
            </div>
    );
}

export default HomeCardCitation;