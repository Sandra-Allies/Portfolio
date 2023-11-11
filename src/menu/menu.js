import './menu.scss';
import { Icon } from '@iconify/react';

function Menu() {
    return (
        <div className="Menu">
            <nav>
                <ul>
                    <li className="Menu-titre">Accueil</li>
                    <li className="Menu-titre">Réalisations</li>
                    <li className="Menu-titre">CV</li>
                    <li className="Menu-titre">Ressources</li>
                    <li className="Menu-icon"><Icon icon="skill-icons:linkedin" /></li>
                    <li className="Menu-icon"><Icon icon="skill-icons:github-light" /></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
