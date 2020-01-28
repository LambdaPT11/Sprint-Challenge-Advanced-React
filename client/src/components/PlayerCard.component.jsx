import React from 'react';


const PlayerCard = ({ img, name, country, searches }) => {

    return(
        <div key={Date.now()} className="card-base">
            <div id="pic" name="pic" className="player-img">
                <img src={img} alt='women soccer player' />
            </div>
            <div className="card-info">
                <h1 >{name}</h1>
                <h3>country: {country}</h3>
                <span>searches: {searches}</span>
            </div>
        </div>
    )
}

export default PlayerCard;
