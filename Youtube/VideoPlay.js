import React from 'react';
import './styles.css';
import ListingPage from './listing';
import Player from './player'




class Play extends React.Component{
   



    render(){
        return(
            <div className="playPage">
            <Player activeId={this.props.match.params.videoId} />
            <div className="listing"> 
                <ListingPage  page="player" name="Upcoming"   activeId={this.props.match.params.videoId}  />
            </div>
            </div>
        )
    }
}



export default Play;

