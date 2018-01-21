import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './components/posts_index';
import PostsNew  from './components/posts_new';
import PostsShow  from './components/posts_show';
import { store } from './store'
class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/posts/new" component={PostsNew}/>
              <Route path="/posts/:id" component={PostsShow}/>
              <Route path="/" component={PostsIndex}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>)
  }
}

export default App;