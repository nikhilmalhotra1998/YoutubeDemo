import {initialState} from '../initialStates';

export  const videosReducer = (state = initialState,action)=>{
    if(!action) return state;
    const {data}=action;
switch(action.type){
    case 'FETCH_DATA':
            return {
                ...state,
                loading:true,
                video:[],
                error:null
            };

    case 'FETCH_DATA_SUCCESS':
        return {
            ...state,
            loading:false,
            video:data.videos,
            error:null
        }

        case 'FETCH_DATA_SUCCESS_BY_ACTIVE_VIDEO':
        return {
            ...state,
            loading:false,
            activeVideo:data.activeVideo,
            error:null
        }
    case 'FETCH_DATA_ERROR':
        return {
            ...state,
            loading:false,
            video:[],
            error:data.error
        }
    default:
        return state;
    }
}
