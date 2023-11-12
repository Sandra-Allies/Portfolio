import './header.scss';
import { Icon } from '@iconify/react';
import Photo from '../assets/images/photo.png';

function Header() {
    return (
        <div className="Header">
            <div className="col1">
                <div class="col1-sun">
                    <Icon icon="pixelarticons:sun" />
                </div>

                <div class="col1-name"><h1>Sandra Alliès</h1></div>
                <div class="col1-mail">sandra.allies@3wa.io</div>
            </div>

            <div className="col2">
                    <img src={Photo} />
            </div>

            <div className="col3">
                <div class="col3-moon"><Icon icon="pixelarticons:moon" /></div>
                <div class="col3-devweb"><h1>Développeuse web Full Stack</h1></div>
                <div class="col3-ecole">Ecole actuelle : 3W Academy</div>
            </div>

        </div>
    );
}

export default Header;