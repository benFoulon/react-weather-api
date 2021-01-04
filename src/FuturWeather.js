import React, { Component } from 'react';
import axios from 'axios';

export default class FuturWeather extends Component {

    state={
        daily:{}
    }

    componentDidMount(){
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
        .then(res => {
            console.log(new Date(res.data.daily[1].dt*1000).toLocaleString("fr-FR", {weekday:"long"}))

            this.setState({
                daily: res.data.daily
            })
        })
    }

    render() {
        const daily = this.state.daily;

        if(Object.keys(daily).length !==0){
            return (
            <div className="next__day">
                <div className="day">
                    <h2 className="day__title">{new Date(daily[1].dt*1000).toLocaleString("fr-FR", {weekday:"long"})}</h2>
                    <img className="logo" src={`http://openweathermap.org/img/w/${daily[1].weather[0].icon}.png`} alt=""/>
                    <p>Température : {daily[1].temp.day} °C</p>
                    <p className="day__descrip">{daily[1].weather[0].description}</p>
                </div>
                <div className="day">
                    <h2 className="day__title">{new Date(daily[2].dt*1000).toLocaleString("fr-FR", {weekday:"long"})}</h2>
                    <img className="logo" src={`http://openweathermap.org/img/w/${daily[2].weather[0].icon}.png`} alt=""/>
                    <p>Température : {daily[2].temp.day} °C</p>
                    <p className="day__descrip">{daily[2].weather[0].description}</p>
                </div>
                <div className="day">
                    <h2 className="day__title">{new Date(daily[3].dt*1000).toLocaleString("fr-FR", {weekday:"long"})}</h2>
                    <img className="logo" src={`http://openweathermap.org/img/w/${daily[3].weather[0].icon}.png`} alt=""/>
                    <p>Température : {daily[3].temp.day} °C</p>
                    <p className="day__descrip">{daily[3].weather[0].description}</p>
                </div>
                <div className="day">
                    <h2 className="day__title">{new Date(daily[4].dt*1000).toLocaleString("fr-FR", {weekday:"long"})}</h2>
                    <img className="logo" src={`http://openweathermap.org/img/w/${daily[4].weather[0].icon}.png`} alt=""/>
                    <p>Température : {daily[4].temp.day} °C</p>
                    <p className="day__descrip">{daily[4].weather[0].description}</p>
                </div>
            </div>
        )
        } else {
            return(
                <p>Loading</p>
            )
        }

        
    }
}
