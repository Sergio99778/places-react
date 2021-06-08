import React from 'react';

import RaisedButton from 'material-ui/RaisedButton'

import {indigo400} from 'material-ui/styles/colors'

import Title from '../components/Title.js'
import Benefits from '../components/Benefits'
import PlaceCard from '../components/places/PlaceCard'
import data from '../requests/places'


export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            places: data.places
        }

        this.hidePlace = this.hidePlace.bind(this)
    }

    places() {
        return this.state.places.map((place,index) => {
          return(
            <PlaceCard onRemove={this.hidePlace} place={place} index={index}></PlaceCard>
          );
        })
    }

    hidePlace(place) {
        this.setState({
            places: this.state.places.filter(el => el !== place)
        })
    }

    render() {
        return(
            <section>
                <div className="Header-background">
                <div style={{"width":"80%", "margin": "0 auto"}}>
                <div className="Header-main">
                    <Title title="Places"></Title>
                    <RaisedButton label="Crear cuenta gratuita" secondary={true}></RaisedButton>
                    <img className="Header-illustration" src={process.env.PUBLIC_URL + '/images/slondotpics.jpg' } alt=""/>
                </div>
                <div>
                <Benefits></Benefits>
                </div>
                </div>
            </div>
            <div style={{'backgroundColor': indigo400,'padding':'50px', 'color': 'white'}}>
                <h3 style={{'fontSize':'24px'}}>Sitios populares</h3>
                <div className="row">
                {this.places()}
                </div>
            </div>
            </section>
        )
    }
}