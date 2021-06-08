import React from 'react';

import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card'

import {indigo400, redA400, lightBlueA400,amberA400} from 'material-ui/styles/colors'

export default class Benefits extends React.Component {
    render() {
        return(
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
        )
    }
}