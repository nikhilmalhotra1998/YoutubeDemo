import React from 'react';
import './styles.css';
import {ListingPageItems,NameTag,key} from './commonFunctions';
import {fetchDataAction} from './actions/fetchData';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

class ListingPage extends React.Component{
    
        


    componentDidMount(){
        
        if(this.props.page==='player'){
            let id=this.props.activeId;
            this.props.fetchDataAction(id,key,"ID");
        }
        else{
            let keyword=this.props.match.params.keyword;
            this.props.fetchDataAction(keyword,key,"KEYWORD");
            
        }
        
        
        
        }

        componentDidUpdate(prevProps){
          
          
        if(this.props.page==='player'){
            let id=this.props.activeId;
            
            if(id !== prevProps.activeId){
                this.props.fetchDataAction(id,key,"ID");
                
                
                }
            }
            else{

                let keyword=this.props.match.params.keyword;
                if(keyword!==prevProps.match.params.keyword){
                    this.props.fetchDataAction(keyword,key,"KEYWORD");
                
               
                
            }
        }
    }
    




    render(){

        
        const video=this.props.video.map((list,index)=><ListingPageItems key={index} activeId={list.id.videoId} name={this.props.page==="player"?"play":"list"} img={list.snippet.thumbnails.medium.url} title={list.snippet.title} />)
        return(
            
            <div className={this.props.page==="player"?"width392 searchResult":"searchResult"}>
          
            {this.props.loading?<i className="load fa fa-gear fa-spin"></i>:
                <div>
            <NameTag tag={this.props.name?this.props.name:"Result"} page="listing"/>
                <div className="listing"> 
                        {video}
                 </div>
                 </div>          
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        video:state.video,
        loading:state.loading,
        error:state.error
    
    }
}

export default connect(mapStateToProps, (dispatch)=>
    bindActionCreators({
        fetchDataAction,
    },
    dispatch
    )
)(ListingPage);
