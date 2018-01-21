import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from '../reducers';
import PostsIndex from './posts_index';
import SelectedPosts from './selected_post';
const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component{
  render(){
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <div>
        <Route path="/" component={Hello}/>
        <Route path="/posts" component={PostsIndex}/>
        <Route path="/selected-posts" component={SelectedPosts}/>
      </div>

    </BrowserRouter></Provider>)
  }
}

export default App;