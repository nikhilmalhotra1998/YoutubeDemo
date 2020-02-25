import React from 'react';
import SearchBar from './Youtube/Search';
import VideoGrid from './Youtube/Grid'
import './App.css';
import ListingPage from './Youtube/listing';
import Play from './Youtube/VideoPlay';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Provider} from 'react-redux';
import {createStore, applyMiddleware,} from 'redux';
import thunk from 'redux-thunk'
import {videosReducer} from './Youtube/reducers/dataReducers'
const store = createStore(videosReducer,applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      <Router>
        <SearchBar/>
        <Switch>
          <Route exact path="/home" component={VideoGrid}/>
          <Route exact path="/play/:videoId" component={Play}/>
          <Route exact path="/list/:keyword" component={ListingPage}/>
        </Switch>
      </Router>
      
     
    
     
    </div>
    </Provider>
  );
}

export default App;
