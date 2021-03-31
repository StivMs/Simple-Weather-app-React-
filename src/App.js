import React, { Component } from 'react'
import axios from "axios"
import './App.css';
import CitySearch from './components/CitySearch'
import { Container } from 'react-bootstrap';

import { API_KEY, API_BASE_URL } from './apis/config';
import Forecast from './components/Forecast';

export class App extends Component {
  state = {
    forecast: []
  }

  searchWeather = async text => {
    const res = await
      axios.get(`${API_BASE_URL}forecast?q=${text}&appid=${API_KEY}&units=metric&cnt=5`)

    this.setState({ forecast: res.data.list })
    console.log(this.state.forecast);

  }

  render() {
    return (
      <Container className='App'>
        <CitySearch searchWeather={this.searchWeather} />
        <Forecast weathers={this.state.forecast} />
      </Container>
    )
  }
}

export default App
