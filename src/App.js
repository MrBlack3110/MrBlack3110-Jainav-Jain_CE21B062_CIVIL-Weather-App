import React from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';

const API_key = '9efe60a9fa104be4a9fb10a56d874b12'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      // temp_max: undefined,
      // temp_min: undefined,
      description: "",
      error: false

    };

    this.weathericon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  calCelsius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  get_Weathericon(icons, rangeID){
    switch(true){
      case rangeID >= 200 && rangeID <= 232:
        this.setState({icon: this.weathericon.Thunderstorm});
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({icon: this.weathericon.Drizzle});
        break; 
      case rangeID >= 500 && rangeID <= 531:
        this.setState({icon: this.weathericon.Rain});
        break; 
      case rangeID >= 600 && rangeID <= 622:
        this.setState({icon: this.weathericon.Snow});
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({icon: this.weathericon.Atmosphere});
        break;
      case rangeID === 800:
        this.setState({icon: this.weathericon.Clear});
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({icon: this.weathericon.Clouds});
        break;
      default:
        this.setState({icon: this.weathericon.Clouds});  

    }
  }

  getWeather = async (e) => {

    e.preventDefault();

    const City = e.target.elements.city.value;
    const Country = e.target.elements.country.value;

    if(City && Country){
      
          const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${City},${Country}&appid=${API_key}`)
      
          const response = await api_call.json();
      
          console.log(response);
      
          this.setState({
            city: `${response.city.name}, ${response.city.country}`,
            celsius: this.calCelsius(response.list[0].main.temp),
            celsius1: this.calCelsius(response.list[1].main.temp),
            celsius2: this.calCelsius(response.list[2].main.temp),
            celsius3: this.calCelsius(response.list[3].main.temp),
            // temp_max: this.calCelsius(response.main.temp_max),
            // temp_min: this.calCelsius(response.main.temp_min),
            // description: response.weather[0].description,
            error: false
          })
      
          this.get_Weathericon(this.weathericon, response.weather[0].id);

    }
    else{
      this.setState({error: true});
    }
  }

  render(){
    return(
      <div className="App">
        <Form loadweather = {this.getWeather} error = {this.state.error}/>
        <Weather
         city = {this.state.city} 
         country = {this.state.country} 
         temp_celsius = {this.state.celsius} 
         temp_celsius1 = {this.state.celsius1} 
         temp_celsius2 = {this.state.celsius2} 
         temp_celsius3 = {this.state.celsius3} 
        //  temp_max = {this.state.temp_max} 
        //  temp_min = {this.state.temp_min} 
        //  description = {this.state.description} 
        //  weathericon = {this.state.icon}
         />
      </div>
    );
  }
}


export default App;
