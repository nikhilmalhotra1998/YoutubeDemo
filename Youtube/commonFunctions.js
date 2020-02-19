import React from 'react';
import './styles.css';
import {
    Link
  } from "react-router-dom";


  const key='AIzaSyCBNNQjP_MJD8pJe1fnu2zfOC5w7Oi5NIw';


class ListingPageItems extends React.Component{
render(){
    return(
        
        <Link to={`/play/${this.props.activeId}`}>
        <div className={this.props.name==="main"?"mainGrid":"videoDetails"} >
                
            <img src={this.props.img} className="boxed" alt={this.props.title}/>
    <p className={this.props.name==="main"?"videoTitle":this.props.name==="play"?"play list":"list"}>{this.props.title}</p>
    
        </div>
        </Link>
        
    )
}
}



const NameTag = (props) =>{
    return (
        <div className="nameTag">
            <h1>{props.tag}</h1>
        </div>
    )
}


export {ListingPageItems,NameTag,key };