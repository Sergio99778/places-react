import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardText} from 'material-ui/Card'

import {indigo400, redA400, lightBlueA400,amberA400} from 'material-ui/styles/colors'

import Title from './components/Title.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div style={{"width":"80%", "margin": "0 auto"}}>
            <div className="Header-main">
              <Title title="Places"></Title>
              <RaisedButton label="Crear cuenta gratuita" secondary={true}></RaisedButton>
              <img className="Header-illustration" src={process.env.PUBLIC_URL + '/images/slondotpics.jpg' } alt=""/>
            </div>
          </div>
        </div>
        <div style={{'backgroundColor': indigo400,'padding':'50px'}}>
          <ul>
            <Card className="Header-Benefit">
              <CardText style={{'backgroundColor':redA400}}>
                <img style={{'width': '100%'}} src={process.env.PUBLIC_URL + '/images/heart.jpg'} alt="" />
                <h3>Calificaciones con emociones</h3>
                <p>Califica tus lugares con experiencias, no con numeros</p>
              </CardText>
            </Card>
            <Card className="Header-Benefit">
              <CardText style={{'backgroundColor':redA400}}>
                <img style={{'width': '100%'}} src={process.env.PUBLIC_URL + '/images/no-internet.jpg'} alt="" />
                <h3>¿Sin internet? Sin problemas</h3>
                <p>Places funciona sin internet o en conexiones lentas</p>
              </CardText>
            </Card>
            <Card className="Header-Benefit">
              <CardText style={{'backgroundColor':redA400}}>
                <img style={{'width': '100%'}} src={process.env.PUBLIC_URL + '/images/favorite.jpg'} alt="" />
                <h3>Tus lugares favoritos</h3>
                <p>Define la lista de tus lugares favoritos</p>
              </CardText>
            </Card>
          </ul>
        </div>
      </MuiThemeProvider>
    );
  }
  
}

export default App;
