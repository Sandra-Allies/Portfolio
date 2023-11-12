import './footer.scss';
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <div className="Footer">
            <span>Tout droit résèrvé @Sandra Alliès 2023 | 
                Réalisé avec <Icon className="Footer-icon" icon="skill-icons:react-dark" /></span>
        </div>
    );
}

export default Footer;
