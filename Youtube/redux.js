import React from 'react';
import ReactDom from 'react-dom';
import {Provider,connect} from 'react-redux';
import {CreateStore,CombineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '/.redux/reducers' 
import ListingPage from './listing';


const ADD="ADD";

const addMessage=message=>{
    return{
        type:ADD,
        message
    };
};


const messageReducer =(prevState=[],action)=>{
    switch(action.type){
        case ADD:
            return [...prevState,action.message];
            break;
            default:
                return prevState;
    }
}

const store = CreateStore(messageReducer);


class AddWrapper extends React.Component{
    render(){
        return(
    <Provider store={store}>
        <ListingPage/>
    </Provider>
        )
    }
}


const state=[];


const mapStateToProps=state=>{
return {
    message :state
}
}

const mapDispatchToProps=dispatch=>{
    return{
        submitNewMessage:message=>{
            dispatch(addMessage(message));
        }
    }
}

connect(mapStateToProps,mapDispatchToProps)(MyComponent);








