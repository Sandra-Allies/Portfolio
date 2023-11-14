import './menu.scss';
import { Icon } from '@iconify/react';
import CV from '../assets/CV.pdf';

function Menu() {
    return (
        <div className="Menu">
            <nav>
                <ul>
                    <li className="Menu-titre"><a href="">Accueil</a></li>
                    <li className="Menu-titre"><a href="">Réalisations</a></li>
                    <li className="Menu-titre"><a href={CV} target="_blank" type="application/pdf">Mon CV</a></li>
                    <li className="Menu-titre"><a href="">Ressources</a></li>
                    <li className="Menu-icon"><a href="https://www.linkedin.com/in/sandra-allies/" title="S'ouvrira dans un nouvel onglet" target="_blank"><Icon icon="skill-icons:linkedin" /></a></li>
                    <li className="Menu-icon"><a href="https://github.com/Sandra-Allies" title="S'ouvrira dans un nouvel onglet" target="_blank"><Icon icon="skill-icons:github-light" /></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
