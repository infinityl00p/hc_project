import React, { Component } from 'react';
import Header from './Header';
import TiltSelection from './TiltSelection';
import DetailForm from './DetailForm';

export default class LeagueSelectionForm extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      headerText: 'Pick your city',
      city: '',
      league: ''
    }
  }

  getData = () => {
    if (this.state.step === 1) {
      return this.getCities();
    } else if (this.state.step === 2) {
      return this.getLeagues();
    }
  }

  getCities = () => {
    const cityList = [];

    this.props.data.forEach((leagueObject) => {
      if (!cityList.includes(leagueObject.city)) {
        cityList.push(leagueObject.city);
      }
    });

    return cityList;
  }

  getLeagues = () => {
    const leagueList = [];

    this.props.data.forEach((leagueObject) => {
      if (leagueObject.city === this.state.city) {
        leagueList.push(leagueObject.name);
      }
    });

    return leagueList;
  }

  handleTiltPress = (data) => {
    if (this.state.step === 1) {
      this.setState({ city: data, step: 2, headerText: 'Pick a league' });
    } else {
      this.setState({ league: data, step: 3, headerText: 'Enter your details' });
    }
  }

  renderForm = () => {
    if(this.state.step === 1 || this.state.step === 2) {
      return (
        <TiltSelection
          data={this.getData()}
          onPress={this.handleTiltPress}
        />
      )
    } else {
      return (
        <DetailForm
          city={this.state.city}
          state={this.state.league}
        />
      )
    }
  }

  render() {
    return (
      <div className='league-selection-form'>
        <Header
          subHeader={this.state.headerText}
        />
        {this.renderForm()}
      </div>
    );
  }
}