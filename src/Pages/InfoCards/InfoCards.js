import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'opening hours',
            description: 'open 9am to 5pm everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 1,
            name: 'Our location',
            description: '10/W, D-block, Basundhara',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 1,
            name: 'Contact us',
            description: 'Email: bookmart@gmail.com',
            icon: phone,
            bgClass: 'bg-primary'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 py-6'>
            {
                cardData.map(card => <InfoCard 
                key={card.id}
                card={card}
                ></InfoCard> )
            }
        </div>
    );
};

export default InfoCards;