import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from './store'
import ChampionSearch from './containers/champion_search';
import SummonerSearch from './containers/summoner_search';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/s" component={SummonerSearch}/>
              <Route path="/" component={ChampionSearch}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>)
  }
}

export default App;