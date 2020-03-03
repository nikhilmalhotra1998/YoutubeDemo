function fetchData(){
    return{
        type:'FETCH_DATA'
    }
}

function fetchDataSucess(videos){
    return{
        type:'FETCH_DATA_SUCCESS',
        data: {videos}
    }
}
function fetchDataSucessByActiveVideo(activeVideo){
    return{
        type:'FETCH_DATA_SUCCESS_BY_ACTIVE_VIDEO',
        data: {activeVideo}
    }
}
function fetchDataError(error){
    return{
        type:'FETCH_DATA_ERROR',
        data: {error}
    }
}

export function fetchDataAction(videoId,key,option){
    if(option==='ID'){
    return dispatch =>{
        
         fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=20&part=snippet&relatedToVideoId=${videoId}&type=video&key=${key}`)
        .then(res=>{
            return res.json();
        }
            )
        .then((result) =>{
            return dispatch(fetchDataSucess(result.items));
        })
        .catch(error => dispatch(fetchDataError(error)));
        dispatch(fetchData());
    };
}
else if(option==='KEYWORD'){
    return dispatch =>{
        
        (fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${videoId}&type=video&key=${key}`))
        .then(res=> res.json())
        .then((result) => dispatch(fetchDataSucess(result.items))
        )
        .catch(error => dispatch(fetchDataError(error)));

        dispatch(fetchData());
    }; 
}

else if(option==='HOME'){
    return dispatch =>{
        
        (fetch(`https://www.googleapis.com/youtube/v3/videos?maxResults=20&part=snippet&chart=mostPopular&regionCode=IN&key=${key}`))
        .then(res=> res.json())
        .then((result) => dispatch(fetchDataSucess(result.items))
        )
        .catch(error => dispatch(fetchDataError(error)));

        dispatch(fetchData());
    }; 
    
}
else if(option==='PLAYER'){
    return dispatch =>{
        
        (fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${key}`))
        .then(res=> res.json())
        .then((result) => {
            dispatch(fetchDataSucessByActiveVideo(result.items))
        
            }    )
        .catch(error => dispatch(fetchDataError(error)));

        dispatch(fetchData());
    }; 
    
}


}