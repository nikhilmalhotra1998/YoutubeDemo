import React from 'react';
import './styles.css';
import {ListingPageItems,NameTag,key} from './commonFunctions'
import {fetchDataAction} from './actions/fetchData';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'


class VideoGrid extends React.Component{
    
 
     componentDidMount(){
        this.props.fetchDataAction("",key,"HOME");   
    }
    
    
    
    

    render(){
        const video=this.props.video.map((i,index)=><ListingPageItems key={index} activeId={i.id} name="main" img={i.snippet.thumbnails.medium.url} title={i.snippet.title}/>)
      
        return(
            
            <div className="cutout">

            <NameTag tag={this.props.loading?"Loading":"Most Popular"}/>
            <div className="videoCutout">
                
            {this.props.loading?<i className="load fa fa-gear fa-spin"></i>:video}
                
                
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        video:state.video,
        loading:state.loading
    }
}

export default connect(mapStateToProps, (dispatch)=>
    bindActionCreators({
        fetchDataAction,
    },
    dispatch
    )
)(VideoGrid);

