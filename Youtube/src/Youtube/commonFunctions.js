import React from 'react';
import './styles.css';
import {
    Link
  } from "react-router-dom";


  const key='AIzaSyAREgfhEJ4ULaI8AYIEyZhPWrNMbaAl_GU';


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
        <div className={props.page==="home"?"nameTag":"nameTag alignInitial"}>
            <h1>{props.tag}</h1>
        </div>
    )
}


export {ListingPageItems,NameTag,key };