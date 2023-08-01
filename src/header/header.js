import './header.scss';

function Header() {
    return (
        <div className="Header">
            {/* FOR RIBBON NAME */}
            <div className="ribbon"><h1>Sandra Alliès</h1></div>
            <h1 className="portfolio">Portfolio</h1>
            <div className="about">
                <div className="aboutMe">About Me</div>
                <div className="btnOld">Afficher mes débuts depuis 2008</div>
                <div className="btnCurrent">Afficher ce que j'ai appris pendant ma formation</div>
            </div>
        </div>
    );
}

export default Header;