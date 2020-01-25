import React from 'react';


const PlayerCard = ({ name, country, searches }) => {

    return(
        <div className="card-base">
            <h1>{name}</h1>
            <h3>country: {country}</h3>
            <span>searches: {searches}</span>
        </div>
    )
}

export default PlayerCard;
