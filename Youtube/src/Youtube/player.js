import React from 'react';
import './styles.css';
import {key} from './commonFunctions'
import {fetchDataAction} from './actions/fetchData';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class Player extends React.Component{


 componentDidMount(){
        let id=this.props.activeId;
        this.props.fetchDataAction(id,key,"PLAYER");
    }
        
    componentDidUpdate(prevProps){
          
            let id=this.props.activeId;
            
            if(id !== prevProps.activeId||this.props.history!==prevProps.history){
                this.props.fetchDataAction(id,key,"PLAYER");
                {console.log("123")}
                }
            }
            
        
    
    
render(){
    const {activeVideo}=this.props;
        
    return (
       
        <div className="PlayingDetails">
            <p className="player"><iframe id="ytplayer" type="text/html" allow="autoplay" title={this.props.activeId}
  src={`https://www.youtube.com/embed/${this.props.activeId}?autoplay=1`} frameBorder="0"/></p>
            <h1 className="title">{activeVideo&& activeVideo[0].snippet.title}</h1>
        </div>
    )
}
}
function mapStateToProps(state) {
    return{
        activeVideo:state.activeVideo
    }
}
export default connect(mapStateToProps, (dispatch)=>
    bindActionCreators({
        fetchDataAction,
    },
    dispatch
    )
)(Player);