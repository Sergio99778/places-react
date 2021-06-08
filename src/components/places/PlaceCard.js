import React from 'react';

import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';

export default class PlaceCard extends React.Component {
    render() {
        return(
            <div className="col-xs-12 col-sm-4" key={this.props.index}>
              <Card>
                <CardMedia>
                  <img src={process.env.PUBLIC_URL + this.props.place.imageURL} alt="" />
                </CardMedia>
                <CardTitle title={this.props.place.title}></CardTitle>
                <CardText>{this.props.place.description}</CardText>
              </Card>
            </div>
        )
    }
}