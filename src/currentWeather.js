import React, { Component } from 'react';
import axios from 'axios';

export default class CurrentWeather extends Component {

    state={
        current:{}
    }
    
    componentDidMount(){
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
        .then(res=>{
            this.setState({
                current: res.data.current
            })
        })

        // axios.get("openweathermap.org/img/wn/${icon}@2x.png")
    }

    render() {

        const current = this.state.current
        

        if(Object.keys(current).length !==0){
            const icon = current.weather[0].icon;
            const weatherDayLogo = `http://openweathermap.org/img/w/${icon}.png`;
            return (
                <div className="current_day">
                    <div className="current__logo">
                        <img className="logo" src={weatherDayLogo} alt="logo météo du jour"/>
                    </div>
                    <div className="current__info">
                        <h1>Aujourd'hui</h1>
                        <h2>Lens</h2>
                        <p>Température: {current.temp}°C</p>
                        <p>{current.weather[0].description}</p>
                    </div>
                </div> 
            )
        } else {
            return(
                <p>Loading..</p>
            )
        }
    }
}
