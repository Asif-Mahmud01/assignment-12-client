import React from 'react';

const InfoCard = ({ card }) => {
    const { icon, name, description, bgClass } = card
    return (
        <div>
            <div className= {`card card-side bg-base-100 shadow-xl p-6 text-white ${bgClass}`}>
                <figure>
                    <img src={icon} alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default InfoCard;