import React from 'react';


const PlayerCard = ({ key, img, name, country, searches }) => {

    return(
        <div key={key} className="card-base">
            <div  className="player-img">
                <img name="pic" src={img} alt='women soccer player' />
            </div>
            <div data-testid="cardInfo" className="card-info">
                <h2>{name}</h2>
                <h3>country: {country}</h3>
                <span>searches: {searches}</span>
            </div>
        </div>
    )
}

export default PlayerCard;
