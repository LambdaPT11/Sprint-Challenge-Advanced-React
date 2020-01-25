import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard.component';

class Player extends React.Component {
    constructor() {
        super()
        this.state = {
            player: []
        }
    }

    GrabPlayer = () => {
        axios.get('http://localhost:5000/api/players')
            // .then(res => (console.log(res.data)))
            .then(res => this.setState({ player: res.data }))
            .catch(err => {
                console.log('Axios, player:', err);
            });
    };

    componentDidMount() {
        this.GrabPlayer();
    }

    render() {
        return (
            <div>
                {this.state.player.map(play => {
                    return(
                        <div>
                            <PlayerCard 
                                name={play.name}
                                country={play.country}
                                searches={play.searches}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Player;