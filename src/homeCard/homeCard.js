import './homeCard.scss';
import Feneco from '../assets/images/Feneco.jpg'
import { Icon } from '@iconify/react';
import HomeCardCitation from './homeCardCitation';

function HomeCard() {
    return (
        <div className="wrapHome">
            <HomeCardCitation />
        </div>
    );
}

export default HomeCard;