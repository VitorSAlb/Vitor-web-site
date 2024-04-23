import React from "react";
import './SmallCard.scss'
import isd from '../../assets/icons/software-development.svg';
import ibd from '../../assets/icons/backend-development.svg'
import iwd from '../../assets/icons/web-development.svg';
import imd from '../../assets/icons/mobile-develoment.svg';
import ise from '../../assets/icons/software-enfineering.svg';
import idb from '../../assets/icons/database.svg';
import ia from '../../assets/icons/algorithms.svg';
import iai from '../../assets/icons/ai.svg';

const lista = [
    {
        name:'Software Development',
        icon:isd
    },
    {
        name:'Backend Development',
        icon:ibd
    },
    {
        name:'Web Development',
        icon:iwd
    },
    {
        name:'Mobile Development',
        icon:imd
    },
    {
        name:'Software Engineering',
        icon:ise
    },
    {
        name:'Database',
        icon:idb
    },
    {
        name:'Algorithms',
        icon:ia
    },
    {
        name:'AI',
        icon:iai
    }];
    
const SmallCard = () => {
    return (
        <div className="section-cards">
            {lista.map((item, index) => (
                <SmallCardu key={index} interests={item.name} icon={item.icon} />
            ))}
        </div>
    )
}

const SmallCardu = (props) => {
    return (
        <div className="container-smallcard">
            <div className="icon-section">
                <img src={props.icon} alt={props.interests} />
            </div>
            <div className="text-section">
                <h1>{props.interests}</h1>
            </div>
        </div>
    )
}

export default SmallCard;
