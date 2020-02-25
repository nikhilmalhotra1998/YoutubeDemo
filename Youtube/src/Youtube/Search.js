import React from 'react';
import './styles.css';
import {
    Link
  } from "react-router-dom";

  
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:"",
        
        }


    }
    handleChange = (e)=>{
            this.setState({
                input:e.target.value
            })
    }
    handleClick = ()=>{
        
        this.setState({
            input:""
            
        });
    }
  

    render(){
        return(
            <div className="searchBar">
                
                <input type="text" placeholder="Search" onChange={this.handleChange} id="search" value={this.state.input}></input>
                <Link to={`/list/${this.state.input}`}>
                <button onClick={this.handleClick} className="fa fa-search" id="button"></button>
                </Link>
                
            </div>
        )
    }

}

export default SearchBar;