import React from 'react';

class Player extends React.Component {
    constructor() {
        super()
        this.state = {
            player: ['mason']
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.player}</h1>
            </div>
        )
    }
}

export default Player;