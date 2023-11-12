import './homeCard.scss';

function HomeCardCafe() {
    return (
        <div className="HomeCard">
            <div className="HomeCard-picture">
                <iframe src="https://www.youtube.com/embed/UGtKGX8B9hU?si=oWhS8gpcE5kncVMl"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>

            <div className="HomeCard-content">
                <h3>Quel est le meilleur ami du developpeur ?</h3>
                <p><ul>
                    <li>Réponse 1 : Le café.</li>
                    <li>Réponse 2 : Le thé.</li>
                    <li>Réponse 3 : Une chocolatine et un café / thé.</li>
                </ul></p>
            </div>
        </div>
    );
}

export default HomeCardCafe;