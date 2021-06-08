import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card'

import {indigo400, redA400, lightBlueA400,amberA400} from 'material-ui/styles/colors'

import data from './requests/places'

import Title from './components/Title.js'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    console.log(data)
  }

  places() {
    return data.places.map((place,index) => {
      return(
        <div className="col-xs-12 col-sm-4" key={index}>
          <Card>
            <CardMedia>
              <img src={process.env.PUBLIC_URL + place.imageURL} alt="" />
            </CardMedia>
            <CardTitle title={place.title}></CardTitle>
            <CardText>{place.description}</CardText>
          </Card>
        </div>
      );
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <section>
          <div className="Header-background">
            <div style={{"width":"80%", "margin": "0 auto"}}>
              <div className="Header-main">
                <Title title="Places"></Title>
                <RaisedButton label="Crear cuenta gratuita" secondary={true}></RaisedButton>
                <img className="Header-illustration" src={process.env.PUBLIC_URL + '/images/slondotpics.jpg' } alt=""/>
              </div>
              <div>
              <ul>
              <Card className="Header-Benefit">
                <CardText >
                  <div className="row">
                    <div className="Header-Benefit-image col-xs" style={{'backgroundColor':redA400}}>
                      <img style={{'width': '100%'}} src={process.env.PUBLIC_URL + '/images/heart.png'} alt="" />
                    </div>
                    <div className="Header-Benefit-content col-xs">
                      <h3>Califica con el corazón</h3>
                      <p>Califica tus lugares con experiencias, no con numeros</p>
                    </div>
                  </div>
                </CardText>
              </Card>
              <Card className="Header-Benefit">
                <CardText >
                  <div className="row">
                    <div className="Header-Benefit-image col-xs" style={{'backgroundColor':lightBlueA400}}>
                      <img style={{'width': '100%'}} src={process.env.PUBLIC_URL + '/images/no-internet.png'} alt="" />
                    </div>
                    <div className="Header-Benefit-content col-xs">
                      <h3>¿Sin internet? Sin problemas</h3>
                      <p>Places funciona sin internet o en conexiones lentas</p>
                    </div>
                  </div>
                </CardText>
              </Card>
              <Card className="Header-Benefit">
                <CardText  >
                  <div className="row">
                    <div className="Header-Benefit-image col-xs" style={{'backgroundColor':amberA400}} >
                      <img style={{'width': '100%', 'backgroundColor':amberA400}} src={process.env.PUBLIC_URL + '/images/favorite.png'} alt="" />
                    </div>
                    <div className="Header-Benefit-content col-xs">
                      <h3>Añade tus lugares favoritos</h3>
                      <p>Define la lista de tus favoritos en el mundo</p>
                    </div>
                  </div>
                </CardText>
              </Card>
            </ul>
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
      </MuiThemeProvider>
    );
  }
  
}

export default App;
