import React, { Component } from 'react'

export default class SearchForm extends Component {
    render() {
        return (
            <div className="form__input">
                <input type="text" placeholder="Latitude"/>
                <input type="text" placeholder="Longitude"/>
                <button className="form__btn" type="submit">Ok</button>
            </div>
        )
    }
}
