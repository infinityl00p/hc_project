import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import LeagueSelectionForm from './LeagueSelectionForm';
import './App.css';

class App extends Component {
  state = {
    leagueData: []
  }

  componentWillMount() {
    axios.get('https://api-us.hockey-community.com/v1/explore/locations' +
    '?category=leagues&sw=49.1407,-123.0899&ne=49.3261,-122.9310&origin=49.2335,-123.0104')
      .then(({ data }) => {
        return this.setState({
          leagueData: data
        })
      });
  }

  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' render={() => <Main />} />
          <Route path='/signup' render={() => <LeagueSelectionForm data={this.state.leagueData} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
