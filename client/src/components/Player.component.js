import React from 'react';
import axios from 'axios';

class Player extends React.Component {
    constructor() {
        super()
        this.state = {
            player: []
        }
    }

    GrabPlayer = () => {
        axios.get('http://localhost:5000/api/players')
            .then(res => (console.log(res.data)))
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
                        
                            <h1 >{play.name}</h1>
                            // <h3>{play.country}</h3>
                            // <span>{play.searches}</span>
                        
                    )
                    
                })}
                
            </div>
        )
    }
}

export default Player;