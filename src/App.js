import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import NavBar from './components/navbar'
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = { 
    counters: [
        { id: 1, data: '', output: ''},
        { id: 2, data: '', output: ''},
        { id: 3, data: '', output: ''},
        { id: 4, data: '', output: ''}
    ],
  };

  // you can set a state directly in a constructor
  constructor(props) {
    super(props);
    console.log('App-constructor');
  }

  handleDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters })
  }

  geocode = async (location, counter) => {
    try {
      let response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
          params:{
              address: location,
              key: 'AIzaSyA4w6NRc7DjmfJCoxO0TQ8Sdu-E_DDQ-X4'
          }
      });
    console.log("GEOCODE", response);
    // Formatted Address
    var formattedAddress = response.data.results[0].formatted_address;
    console.log(formattedAddress);
    // Geometry
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    console.log("lat:", lat)
    console.log('long:', lng)
    this.timezone(lat, lng, counter);

    } catch(e){
        console.log("geocoding api: ", e);
    }
} 

  timezone = async (latitude, longitude, counter) => {
    // for testing
    // var latitude = 43.653226;
    // var longitude = -79.3831843;

    try {
      let response = await axios.get('https://api.timezonedb.com/v2.1/get-time-zone?key=11DHLME82RAS&format=json&by=position&',{
        params:{
            lat: latitude,
            lng: longitude
        }
      });

      console.log("RESPONSE", response);
        // get the current time of input
      var formattedTime = response.data.formatted;
      console.log(formattedTime);

      // updating and displaying output of state to the time recieved from APIs
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index].output = formattedTime;
      this.setState({ counters }); 

    } catch(e) {
      console.log("timezone api:",e);
    }
  }

  handleInput = (counter, newInput) => {
    const counters = [...this.state.counters];       //cloning the array
    const index = counters.indexOf(counter);
    counters[index].data = newInput;
    this.setState({ counters }); 
    console.log("handleInput", counters);
  }

  handleSubmit = async (counter) => {
      console.log('submit', this);
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      await this.geocode(counters[index].data, counter);
    }

  // TODO: reset is not clearing the input box
  handleReset = () =>{
      const counters = this.state.counters.map(c => {
          c.data = '';
          c.output='';
          return c;
      });
      this.setState({ counters });
  };

  render() {
    console.log('App - rendered')

    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters 
        counters={ this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        onChanges={this.handleInput}
        onSubmit={this.handleSubmit}
        />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
